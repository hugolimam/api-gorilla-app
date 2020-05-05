import * as mongodbIWallet from "../../config/mongodb/interfaces/wallet";
import * as mongoose from "mongoose";
export interface IWallet {
  fetchAll(): Promise<mongodbIWallet.IWallet[] | string | Error>;
  fetchById(
    id: mongoose.Types.ObjectId
  ): Promise<mongodbIWallet.IWallet | string | Error>;

  add(wallet: mongodbIWallet.IWallet): Promise<string | Error>;
  updateById(
    id: mongoose.Types.ObjectId,
    wallet: mongodbIWallet.IWallet
  ): Promise<string | Error>;
  deleteById(id: mongoose.Types.ObjectId): Promise<string | Error>;
}
