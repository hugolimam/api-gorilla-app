import { Request, Response, NextFunction } from "express";
import { UserMongoImpl } from "../db/impl/user";
import userModel from "../config/mongodb/schemas/user";
import * as mongoose from "mongoose";
import * as mongodbIUser from "../config/mongodb/interfaces/user";
import * as utilsFunctions from "../utils/functions";

//import * as userDao from "../dao/user";
// as funções agora terão seu processamento em async/await com relação às funções do dao
export namespace v1 {
  const userRepository = new UserMongoImpl(userModel);
  export function fetchAll(
    req: Request,
    res: Response
  ): Promise<mongodbIUser.IUser[] | string | Error> {
    return new Promise(async (resolve, reject) => {
      userRepository
        .fetchAll()
        .then((data: mongodbIUser.IUser[]) => resolve(data))
        .catch(reject);
    });
  }
  export function fetchById(
    req: Request,
    res: Response
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise(async (resolve, reject) => {
      utilsFunctions
        .isObjectId(req.params.id)
        .then(() =>
          userRepository.fetchById(mongoose.Types.ObjectId(req.params.id))
        )
        .then((data: mongodbIUser.IUser) =>
          data ? resolve(data) : reject(`user not found`)
        )
        .catch(reject);
    });
  }
  export function fetchInvestorById(
    req: Request,
    res: Response
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise(async (resolve, reject) => {
      utilsFunctions
        .isObjectId(req.params.id)
        .then(() =>
          userRepository.fetchById(mongoose.Types.ObjectId(req.params.id))
        )
        .then((data: mongodbIUser.IUser) => {
          if (!data) reject(`user not found`);
          data.access_level["name"] !== `investor`
            ? reject(`user isn't an investor`)
            : resolve(data);
        })
        .catch(reject);
    });
  }

  export function fetchConsultantById(
    req: Request,
    res: Response
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise(async (resolve, reject) => {
      utilsFunctions
        .isObjectId(req.params.id)
        .then(() =>
          userRepository.fetchById(mongoose.Types.ObjectId(req.params.id))
        )
        .then((data: mongodbIUser.IUser) => {
          if (!data) reject(`user not found`);
          data.access_level["name"] !== `consultant`
            ? reject(`user isn't an consultant`)
            : resolve(data);
        })
        .catch(reject);
    });
  }
  export function fetchByEmailAndPassword(
    req: Request,
    res: Response
  ): Promise<mongodbIUser.IUser | string | Error> {
    return new Promise(async (resolve, reject) => {
      if (
        utilsFunctions.isVariableEmpty(req.body.email) ||
        utilsFunctions.isVariableEmpty(req.body.password)
      )
        reject(`fields 'email' and 'password' cannot be empty`);
      userRepository
        .fetchByEmailAndPassword(req.body.email, req.body.password)
        .then((data: mongodbIUser.IUser) =>
          data ? resolve(data) : reject(`user not found`)
        )
        .catch(reject);
    });
  }
  export function add(req: Request, res: Response): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      userRepository
        .add(new userModel(req.body))
        .then(() => resolve(`user successfully added`))
        .catch(reject);
    });
  }

  export function updateById(
    req: Request,
    res: Response
  ): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      let user = new userModel(req.body);
      user
        .validate()
        .then(() =>
          utilsFunctions
            .isObjectId(req.params.id)
            .then(() =>
              userRepository.updateById(
                mongoose.Types.ObjectId(req.params.id),
                user
              )
            )
            .then(() => resolve(`user updated successfully`))
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
          userRepository.deleteById(mongoose.Types.ObjectId(req.params.id))
        )
        .then(() => resolve(`user deleted successfully`))
        .catch(reject);
    });
  }
}
