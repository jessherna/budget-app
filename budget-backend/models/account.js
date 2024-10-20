const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: String,
  balance: Number,
  type: String
});

module.exports = mongoose.model('Account', accountSchema);
