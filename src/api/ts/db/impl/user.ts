import { IUser } from "../interfaces/user";
import * as mongodbIUser from "../../config/mongodb/interfaces/user";
import * as mongoose from "mongoose";
import { access } from "fs";
export class UserMongoImpl implements IUser {
  private readonly _userMongoRepoImpl: mongoose.Model<mongodbIUser.IUser>;
  public constructor(userMongoRepoImpl: mongoose.Model<mongodbIUser.IUser>) {
    this._userMongoRepoImpl = userMongoRepoImpl;
  }
  fetchAll(): Promise<mongodbIUser.IUser[] | string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl
        .find((err: Error, data: mongodbIUser.IUser[]) => {
          if (err) reject(err);
          resolve(data);
        })
        .populate("access_level");
    });
  }
  fetchById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl
        .findById(id, (err: Error, data: mongodbIUser.IUser) => {
          if (err) reject(err);
          resolve(data);
        })
        .populate("access_level");
    });
  }
  fetchConsultantById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl
        .findById(id, (err: Error, data: mongodbIUser.IUser) => {
          if (err) reject(err);
          resolve(data);
        })
        .populate("access_level");
    });
  }
  fetchInvestorById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl
        .findById(id, (err: Error, data: mongodbIUser.IUser) => {
          if (err) reject(err);
          resolve(data);
        })
        .populate("access_level");
    });
  }
  fetchByEmailAndPassword(
    email: string,
    password: string
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl
        .findOne(
          { email, password },
          "_id full_name phone_number email birth_day password gender activated created_on",
          (err: Error, data: mongodbIUser.IUser) => {
            if (err) reject(err);
            resolve(data);
          }
        )
        .populate("access_level");
    });
  }

  add(user: mongodbIUser.IUser): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      user.save((err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
  updateById(
    id: mongoose.Types.ObjectId,
    user: mongodbIUser.IUser
  ): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl.update(
        { _id: id },
        {
          $set: {
            activated: user.activated,
            full_name: user.full_name,
            phone_number: user.phone_number,
            email: user.email,
            birth_day: user.birth_day,
            password: user.password,
            gender: user.gender,
            access_level: user.access_level,
          },
        },
        { multi: true },
        (err: Error, data: mongodbIUser.IUser) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }
  deleteById(id: mongoose.Types.ObjectId): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      this._userMongoRepoImpl.deleteOne({ _id: id }, (err: Error) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}
