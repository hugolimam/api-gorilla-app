import * as mongodbIUser from "../../config/mongodb/interfaces/user";
import * as mongoose from "mongoose";
export interface IUser {
  fetchAll(): Promise<mongodbIUser.IUser[] | string | Error>;
  fetchById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIUser.IUser | string | Error>;

  fetchByEmailAndPassword(
    email: string,
    password: string
  ): Promise<mongodbIUser.IUser | string | Error>;
  add(user: mongodbIUser.IUser): Promise<string | Error>;
  updateById(
    id: mongoose.Types.ObjectId,
    user: mongodbIUser.IUser
  ): Promise<string | Error>;
  deleteById(id: mongoose.Types.ObjectId): Promise<string | Error>;
  fetchInvestorById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIUser.IUser | string | Error>;

  fetchConsultantById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIUser.IUser | string | Error>;
}
