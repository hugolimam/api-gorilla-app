import * as express from "express";

import { welcome, verifyJwtAuth, authenticate } from "../controllers/all";

import * as user from "./user";
import * as accessLevel from "./accessLevel";
import * as wallet from "./wallet";

export namespace v1 {
  let router = express.Router();

  router.all("/", welcome);
  router.all(`/api/`, welcome);
  router.all(`/api/v1/`, welcome);
  router.post(`/api/v1/authenticate`, authenticate);
  router.use(`/api/v1/access_level`, verifyJwtAuth, accessLevel.v1.routes());
  router.use(`/api/v1/user`, verifyJwtAuth, user.v1.routes());
  router.use(`/api/v1/wallet`, verifyJwtAuth, wallet.v1.routes());
  export function routes(): express.Router {
    return router;
  }
}
