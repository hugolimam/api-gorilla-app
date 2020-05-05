import * as mongoose from "mongoose";
export interface IAccessLevel extends mongoose.Document {
  name: string;
  created_on: Date;
}
