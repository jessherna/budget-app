import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  accounts: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }]
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);