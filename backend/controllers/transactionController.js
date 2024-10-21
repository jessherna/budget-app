const Transaction = require('../models/Transaction').default;
const { find } = require('../models/Transaction');

// Middleware for checking user authentication
const createTransaction = async (req, res, next) => {
  const { account, amount, category, description, date, type } = req.body;

  try {
    const newTransaction = new Transaction({
      user: req.user?.id,
      account,
      amount,
      category,
      description,
      date,
      type
    });

    const transaction = await newTransaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const getTransactions = async (req, res, next) => {
  try {
    const transactions = await find({ user: req.user?.id });
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Exporting the controller functions
module.exports = {
  createTransaction,
  getTransactions
};
