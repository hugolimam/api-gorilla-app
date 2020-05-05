import * as mongoose from "mongoose";
export interface IUser extends mongoose.Document {
  full_name: string;
  email: string;
  phone_number: string;
  birth_day: string;
  password: string;
  gender: string;
  activated: Boolean;
  created_on: Date;
  access_level: mongoose.Schema.Types.ObjectId;
}
