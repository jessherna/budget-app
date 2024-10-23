const express = require('express');
const asyncHandler = require('express-async-handler');
const {getAllAccounts, getAccountById, createAccount, updateAccount, deleteAccount } = require('../controllers/accountController');

const router = express.Router();

// Route to get all accounts
router.get('/', asyncHandler(getAllAccounts));

// Route to get a single account by ID
router.get('/:id', asyncHandler(getAccountById));

// Route to create a new account
router.post('/', asyncHandler(createAccount));

// Route to update an existing account by ID
router.put('/:id', asyncHandler(updateAccount));

// Route to delete an account by ID
router.delete('/:id', asyncHandler(deleteAccount));

module.exports = router;