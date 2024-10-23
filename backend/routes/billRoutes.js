const express = require('express');
const asyncHandler = require('express-async-handler');
const { getAllBills, getBillById, createBill, updateBill, deleteBill} = require('../controllers/billController');

const router = express.Router();

// Get all bills
router.get('/', asyncHandler(getAllBills));

// Get a single bill by ID
router.get('/:id', asyncHandler(getBillById));

// Create a new bill
router.post('/', asyncHandler(createBill));

// Update a bill by ID
router.put('/:id', asyncHandler(updateBill));

// Delete a bill by ID
router.delete('/:id', asyncHandler(deleteBill));

module.exports = router;