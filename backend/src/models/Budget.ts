import mongoose, { Document, Schema } from 'mongoose';

export interface IBudget extends Document {
  user: mongoose.Types.ObjectId;
  category: string;
  amount: number;
  startDate: Date;
  endDate: Date;
  actual: number;
}

const budgetSchema: Schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  actual: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model<IBudget>('Budget', budgetSchema);