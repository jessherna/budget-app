const Budget = require('../models/Budget.js');
const { find } = require('../models/Budget.js');

const createBudget = async (req, res) => {
  const { category, amount, startDate, endDate } = req.body;

  try {
    const newBudget = new Budget({
      user: req.user?.id,
      category,
      amount,
      startDate,
      endDate
    });

    const budget = await newBudget.save();
    res.json(budget);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const getBudgets = async (req, res) => {
  try {
    const budgets = await find({ user: req.user?.id });
    res.json(budgets);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Exporting the controller functions
module.exports = {
  createBudget,
  getBudgets
};
