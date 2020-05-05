import * as mongoose from "mongoose";
import { IWallet } from "../interfaces/wallet";
export const walletSchema = new mongoose.Schema(
  {
    currency: { type: String, default: "R$", required: true },
    available: { type: Number, default: 0, required: true },
    invested: { type: Number, default: 0, required: true },
    profit: { type: Number, default: 0, required: true },
    total_amount: { type: Number, default: 0, required: true },
    created_on: { type: Date, default: Date.now },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false }
);
const walletRepo = mongoose.model<IWallet>("Wallet", walletSchema);
export default walletRepo;
