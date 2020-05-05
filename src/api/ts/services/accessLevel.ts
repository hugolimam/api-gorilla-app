import { Request, Response, NextFunction } from "express";
import { accessLevelMongoImpl } from "../db/impl/accessLevel";
import accessLevelModel from "../config/mongodb/schemas/accessLevel";
import * as mongoose from "mongoose";
import * as mongodbIAccessLevel from "../config/mongodb/interfaces/accessLevel";
import * as utilsFunctions from "../utils/functions";

export namespace v1 {
  const accessLevelRepository = new accessLevelMongoImpl(accessLevelModel);
  export function fetchAll(
    req: Request,
    res: Response
  ): Promise<mongodbIAccessLevel.IAccessLevel[] | string | Error> {
    return new Promise(async (resolve, reject) => {
      accessLevelRepository
        .fetchAll()
        .then((data: mongodbIAccessLevel.IAccessLevel[]) => resolve(data))
        .catch(reject);
    });
  }
  export function fetchById(
    req: Request,
    res: Response
  ): Promise<mongodbIAccessLevel.IAccessLevel | string | Error> {
    return new Promise(async (resolve, reject) => {
      utilsFunctions
        .isObjectId(req.params.id)
        .then(() =>
          accessLevelRepository.fetchById(
            mongoose.Types.ObjectId(req.params.id)
          )
        )
        .then((data: mongodbIAccessLevel.IAccessLevel) =>
          data ? resolve(data) : reject(`accessLevel not found`)
        )
        .catch(reject);
    });
  }

  export function fetchByEmailAndPassword(
    req: Request,
    res: Response
  ): Promise<mongodbIAccessLevel.IAccessLevel | string | Error> {
    return new Promise(async (resolve, reject) => {
      if (
        utilsFunctions.isVariableEmpty(req.body.email) ||
        utilsFunctions.isVariableEmpty(req.body.password)
      )
        reject(`fields 'email' and 'password' cannot be empty`);
      accessLevelRepository
        .fetchByEmailAndPassword(req.body.email, req.body.password)
        .then((data: mongodbIAccessLevel.IAccessLevel) =>
          data ? resolve(data) : reject(`access level not found`)
        )
        .catch(reject);
    });
  }
  export function add(req: Request, res: Response): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      accessLevelRepository
        .add(new accessLevelModel(req.body))
        .then(() => resolve(`access level successfully added`))
        .catch(reject);
    });
  }

  export function updateById(
    req: Request,
    res: Response
  ): Promise<string | Error> {
    return new Promise(async (resolve, reject) => {
      let accessLevel = new accessLevelModel(req.body);
      accessLevel
        .validate()
        .then(() =>
          utilsFunctions
            .isObjectId(req.params.id)
            .then(() =>
              accessLevelRepository.updateById(
                mongoose.Types.ObjectId(req.params.id),
                accessLevel
              )
            )
            .then(() => resolve(`access level updated successfully`))
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
          accessLevelRepository.deleteById(
            mongoose.Types.ObjectId(req.params.id)
          )
        )
        .then(() => resolve(`access level deleted successfully`))
        .catch(reject);
    });
  }
}
