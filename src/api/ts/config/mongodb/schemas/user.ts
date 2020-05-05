import * as mongoose from "mongoose";
import { IUser } from "../interfaces/user";
export const UserSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    birth_day: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    activated: { type: Boolean, default: true, required: true },
    created_on: { type: Date, default: Date.now },
    access_level: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AccessLevel",
      required: true,
    },
  },
  { versionKey: false }
);
const userRepo = mongoose.model<IUser>("User", UserSchema);
export default userRepo;
