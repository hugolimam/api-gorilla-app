import * as mongodbIAccessLevel from "../../config/mongodb/interfaces/accessLevel";
import * as mongoose from "mongoose";
export interface IAccessLevel {
  fetchAll(): Promise<mongodbIAccessLevel.IAccessLevel[] | string | Error>;
  fetchById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIAccessLevel.IAccessLevel | string | Error>;

  fetchByEmailAndPassword(
    email: string,
    password: string
  ): Promise<mongodbIAccessLevel.IAccessLevel | string | Error>;
  add(accessLevel: mongodbIAccessLevel.IAccessLevel): Promise<string | Error>;
  updateById(
    id: mongoose.Types.ObjectId,
    accessLevel: mongodbIAccessLevel.IAccessLevel
  ): Promise<string | Error>;
  deleteById(id: mongoose.Types.ObjectId): Promise<string | Error>;
}
