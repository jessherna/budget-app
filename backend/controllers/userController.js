const { genSalt, hash, compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const User = require('../models/User.js');
const Account = require('../models/Account.js');
const { get } = require('http');

// Register a user
const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: 'User already exists' });
      return;
    }

    user = new User({ name, email, password });

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();

    const payload = { id: user.id };
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Login a user
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: 'Invalid credentials' });
      return;
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ msg: 'Invalid credentials' });
      return;
    }

    const payload = { id: user.id };
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Register an account for a user by user ID from URL params
const registerAccount = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const { name, balance } = req.body;
    const account = new Account({ name, balance, user: userId });
    await account.save();

    user.accounts.push(account);
    await user.save();

    res.json(account);
  }
  catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all accounts for a user by user ID from URL params
const getAccounts = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate('accounts');
    
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user.accounts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


// Get all users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  }
  catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}

// Exporting the controller functions
module.exports = {
  registerUser,
  loginUser,
  getAccounts,
  getUsers,
  registerAccount
};
