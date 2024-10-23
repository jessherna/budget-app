const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        enum: ['Savings', 'Checking', 'Credit Card'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Account', AccountSchema);