import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
  user: mongoose.Types.ObjectId;
  account: mongoose.Types.ObjectId;
  amount: number;
  category: string;
  description?: string;
  date: Date;
  type: 'income' | 'expense';
}

const transactionSchema: Schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['income', 'expense'], required: true }
}, { timestamps: true });

export default mongoose.model<ITransaction>('Transaction', transactionSchema);