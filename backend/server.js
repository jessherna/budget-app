const express = require('express');
const { json } = require('express');
const { connect } = require('mongoose');
const { config } = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const budgetRoutes = require('./routes/budgetRoutes.js');
const transactionRoutes = require('./routes/transactionRoutes.js');

config();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Connect to MongoDB
connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
