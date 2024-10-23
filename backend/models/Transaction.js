const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    category: { type: String, enum: ['income', 'expense'] },
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }
});

module.exports = mongoose.model('Transaction', transactionSchema);
