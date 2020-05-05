import { Response, Request, NextFunction } from "express";
import * as utilsFunctions from "../utils/functions";
import * as userService from "../services/user";
import {
  generateJwtExpiresIn1h,
  verifyJwt,
  isVariableEmpty,
} from "../utils/functions";
export function welcome(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    status: true,
    result: `welcome to v${
      process.env.api_version
    } of this api; it's running in '${utilsFunctions.isProduction()}' environment.`,
  });
}
export function verifyJwtAuth(req: Request, res: Response, next: NextFunction) {
  let token = req.headers.authorization;
  if (isVariableEmpty(token)) {
    res.status(500).json({
      status: false,
      result: `token wasn't informed in requesting headers`,
    });
  } else {
    token = token.replace("Bearer ", "");
    verifyJwt(token)
      .then(() => next())
      .catch((e) =>
        res.status(500).json({
          status: false,
          result: { custom_msg_error: `invalid token`, error: e },
        })
      );
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  userService.v1
    .fetchByEmailAndPassword(req, res)
    .then((r) => generateJwtExpiresIn1h(r))
    .then((r) => res.status(200).json({ status: true, result: r }))
    .catch((e) => res.status(500).json({ status: false, result: e }));
}
