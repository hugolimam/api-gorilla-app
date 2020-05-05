import { IWallet } from "../interfaces/wallet";
import * as mongodbIWallet from "../../config/mongodb/interfaces/wallet";
import * as mongoose from "mongoose";
export class walletMongoImpl implements IWallet {
  private readonly _walletMongoRepoImpl: mongoose.Model<mongodbIWallet.IWallet>;
  public constructor(
    walletMongoRepoImpl: mongoose.Model<mongodbIWallet.IWallet>
  ) {
    this._walletMongoRepoImpl = walletMongoRepoImpl;
  }
  fetchAll(): Promise<mongodbIWallet.IWallet[] | string | Error> {
    return new Promise((resolve, reject) => {
      this._walletMongoRepoImpl
        .find((err: Error, data: mongodbIWallet.IWallet[]) => {
          if (err) reject(err);
          resolve(data);
        })
        .populate("user");
    });
  }
  fetchById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIWallet.IWallet | string | Error> {
    return new Promise((resolve, reject) => {
      this._walletMongoRepoImpl
        .findById(id, (err: Error, data: mongodbIWallet.IWallet) => {
          if (err) reject(err);
          resolve(data);
        })
        .populate("user");
    });
  }

  add(wallet: mongodbIWallet.IWallet): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      wallet.save((err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
  updateById(
    id: mongoose.Types.ObjectId,
    wallet: mongodbIWallet.IWallet
  ): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      this._walletMongoRepoImpl.update(
        { _id: id },
        {
          $set: {
            currency: wallet.currency,
            available: wallet.available,
            invested: wallet.invested,
            total_amount: wallet.total_amount,
          },
        },
        { multi: true },
        (err: Error, data: mongodbIWallet.IWallet) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }
  deleteById(id: mongoose.Types.ObjectId): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      this._walletMongoRepoImpl.deleteOne({ _id: id }, (err: Error) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}
