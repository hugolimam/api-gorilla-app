import { Request, Response, NextFunction } from "express";
import * as walletService from "../services/wallet";

export namespace v1 {
  function responseSuccess(success, res, next): void {
    res.status(200).json({ status: true, result: success });
    res.success = true;
    next();
  }
  function responseError(error, res, next): void {
    console.log(error);
    res.status(500).json({ status: false, result: error });
  }

  export function fetchAll(req: Request, res: Response, next: NextFunction) {
    walletService.v1
      .fetchAll(req, res)
      .then((data) => responseSuccess(data, res, next))
      .catch((error) => responseError(error, res, next));
  }

  export function fetchById(req: Request, res: Response, next: NextFunction) {
    walletService.v1
      .fetchById(req, res)
      .then((data) => responseSuccess(data, res, next))
      .catch((error) => responseError(error, res, next));
  }

  export function updateById(req: Request, res: Response, next: NextFunction) {
    walletService.v1
      .updateById(req, res)
      .then((data) => responseSuccess(data, res, next))
      .catch((error) => responseError(error, res, next));
  }

  export function deleteById(req: Request, res: Response, next: NextFunction) {
    walletService.v1
      .deleteById(req, res)
      .then((data) => responseSuccess(data, res, next))
      .catch((error) => responseError(error, res, next));
  }

  export function add(req: Request, res: Response, next: NextFunction) {
    walletService.v1
      .add(req, res)
      .then((data) => responseSuccess(data, res, next))
      .catch((error) => responseError(error, res, next));
  }
}
export namespace v2 {
  export function novaFunctionv2() {}
}
