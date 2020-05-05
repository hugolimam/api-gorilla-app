import * as mongoose from "mongoose";
import { IAccessLevel } from "../interfaces/accessLevel";
export const AccessLevelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    created_on: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
const accessLevelRepo = mongoose.model<IAccessLevel>(
  "AccessLevel",
  AccessLevelSchema
);
export default accessLevelRepo;
