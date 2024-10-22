import mongoose, { Document, Schema } from 'mongoose';

export interface IAccount extends Document {
  name: string;
  balance: number;
  user: mongoose.Types.ObjectId;
}

const accountSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model<IAccount>('Account', accountSchema);