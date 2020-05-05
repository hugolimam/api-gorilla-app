import { Request, Response, NextFunction } from "express";
import { walletMongoImpl } from "../db/impl/wallet";
import { UserMongoImpl } from "../db/impl/user";
import walletModel from "../config/mongodb/schemas/wallet";
import userModel from "../config/mongodb/schemas/user";
import * as mongoose from "mongoose";
import * as mongodbIWallet from "../config/mongodb/interfaces/wallet";
import * as utilsFunctions from "../utils/functions";

//import * as walletDao from "../dao/wallet";
// as funções agora terão seu processamento em async/await com relação às funções do dao
export namespace v1 {
  const walletRepository = new walletMongoImpl(walletModel);
  const userRepository = new UserMongoImpl(userModel);
  export function fetchAll(
    req: Request,
    res: Response
  ): Promise<mongodbIWallet.IWallet[] | string | Error> {
    return new Promise(async (resolve, reject) => {
      walletRepository
        .fetchAll()
        .then((data: mongodbIWallet.IWallet[]) => resolve(data))
        .catch(reject);
    });
  }
  export function fetchById(
    req: Request,
    res: Response
  ): Promise<mongodbIWallet.IWallet | string | Error> {
    return new Promise(async (resolve, reject) => {
      utilsFunctions
        .isObjectId(req.params.id)
        .then(() =>
          walletRepository.fetchById(mongoose.Types.ObjectId(req.params.id))
        )
        .then((data: mongodbIWallet.IWallet) =>
          data ? resolve(data) : reject(`wallet not found`)
        )
        .catch(reject);
    });
  }

  export function add(req: Request, res: Response): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      if (utilsFunctions.isVariableEmpty(req.body.userId))
        reject(`req.body.userId parameter not found`);
      else
        userRepository
          .fetchInvestorById(req.body.userId)
          .then(() => {
            req.body[`user`] = req.body[`userId`];
            delete req.body[`userId`];
            walletRepository.add(new walletModel(req.body));
          })
          .then(() => resolve(`wallet successfully added`))
          .catch(reject);
    });
  }

  export function updateById(
    req: Request,
    res: Response
  ): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      let wallet = new walletModel(req.body);
      wallet
        .validate()
        .then(() =>
          utilsFunctions
            .isObjectId(req.params.id)
            .then(() =>
              walletRepository.updateById(
                mongoose.Types.ObjectId(req.params.id),
                wallet
              )
            )
            .then(() => resolve(`wallet updated successfully`))
        )
        .catch(reject);
    });
  }
  export function deleteById(
    req: Request,
    res: Response
  ): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      utilsFunctions
        .isObjectId(req.params.id)
        .then(() =>
          walletRepository.deleteById(mongoose.Types.ObjectId(req.params.id))
        )
        .then(() => resolve(`wallet deleted successfully`))
        .catch(reject);
    });
  }
}
