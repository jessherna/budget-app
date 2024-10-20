const express = require('express');
const router = express.Router();
const Account = require('../models/account');

// Get all accounts
router.get('/', async (req, res) => {
  const accounts = await Account.find();
  res.send(accounts);
});

// Add a new account
router.post('/', async (req, res) => {
  const account = new Account({
    name: req.body.name,
    balance: req.body.balance,
    type: req.body.type
  });
  await account.save();
  res.send(account);
});

module.exports = router;
