import * as express from "express";
import * as walletController from "../controllers/wallet";

export namespace v1 {
  let router = express.Router();

  router.get("/", walletController.v1.fetchAll);
  router.post("/", walletController.v1.add);
  router.get("/:id", walletController.v1.fetchById);
  router.delete("/:id", walletController.v1.deleteById);
  router.put("/:id", walletController.v1.updateById);

  export function routes(): express.Router {
    return router;
  }
}
