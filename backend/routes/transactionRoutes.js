const express = require('express');
const asyncHandler = require('express-async-handler');
const { getAllTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController');

const router = express.Router();

// Route to get all transactions
router.get('/', asyncHandler(getAllTransactions));

// Route to get a single transaction by ID
router.get('/:id', asyncHandler(getTransactionById));

// Route to create a new transaction
router.post('/', asyncHandler(createTransaction));

// Route to update an existing transaction by ID
router.put('/:id', asyncHandler(updateTransaction));

// Route to delete a transaction by ID
router.delete('/:id', asyncHandler(deleteTransaction));

module.exports = router;