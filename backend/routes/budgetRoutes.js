const express = require('express');
const { createBudget, getBudgets } = require('../controllers/budgetController.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.post('/', auth, createBudget);
router.get('/', auth, getBudgets);

module.exports = router;