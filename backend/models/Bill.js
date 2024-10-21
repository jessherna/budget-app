import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  isPaid: { type: Boolean, default: false },
  isRecurring: { type: Boolean, default: false },
  frequency: { type: String, enum: ['weekly', 'monthly', 'yearly'], required: true }
}, { timestamps: true });

export default mongoose.model('Bill', billSchema);