import { IAccessLevel } from "../interfaces/acessLevel";
import * as mongodbIAccessLevel from "../../config/mongodb/interfaces/accessLevel";
import * as mongoose from "mongoose";
export class accessLevelMongoImpl implements IAccessLevel {
  private readonly _accessLevelMongoRepoImpl: mongoose.Model<
    mongodbIAccessLevel.IAccessLevel
  >;
  public constructor(
    accessLevelMongoRepoImpl: mongoose.Model<mongodbIAccessLevel.IAccessLevel>
  ) {
    this._accessLevelMongoRepoImpl = accessLevelMongoRepoImpl;
  }
  fetchAll(): Promise<mongodbIAccessLevel.IAccessLevel[] | string | Error> {
    return new Promise((resolve, reject) => {
      this._accessLevelMongoRepoImpl.find(
        (err: Error, data: mongodbIAccessLevel.IAccessLevel[]) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  }
  fetchById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIAccessLevel.IAccessLevel | string | Error> {
    return new Promise((resolve, reject) => {
      this._accessLevelMongoRepoImpl.findById(
        id,
        (err: Error, data: mongodbIAccessLevel.IAccessLevel) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  }
  fetchByEmailAndPassword(
    email: string,
    password: string
  ): Promise<mongodbIAccessLevel.IAccessLevel | string | Error> {
    return new Promise((resolve, reject) => {
      this._accessLevelMongoRepoImpl.findOne(
        { email, password },
        "_id full_name phone_number email birth_day password gender activated created_on",
        (err: Error, data: mongodbIAccessLevel.IAccessLevel) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  }

  add(accessLevel: mongodbIAccessLevel.IAccessLevel): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      accessLevel.save((err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
  updateById(
    id: mongoose.Types.ObjectId,
    accessLevel: mongodbIAccessLevel.IAccessLevel
  ): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      this._accessLevelMongoRepoImpl.update(
        { _id: id },
        {
          $set: {
            name: accessLevel.name,
          },
        },
        { multi: true },
        (err: Error, data: mongodbIAccessLevel.IAccessLevel) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }
  deleteById(id: mongoose.Types.ObjectId): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      this._accessLevelMongoRepoImpl.deleteOne({ _id: id }, (err: Error) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}
