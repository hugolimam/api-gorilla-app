import * as mongoose from "mongoose";
export interface IWallet extends mongoose.Document {
  currency: string;
  available: number;
  invested: number;
  profit: number;
  total_amount: number;
  created_on: Date;
  user: mongoose.Schema.Types.ObjectId;
}
