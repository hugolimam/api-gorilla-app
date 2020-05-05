import * as express from "express";
import * as userController from "../controllers/user";

export namespace v1 {
  let router = express.Router();

  router.get("/", userController.v1.fetchAll);
  router.post("/", userController.v1.add);
  router.get("/:id", userController.v1.fetchById);
  router.get("/consultant/:id", userController.v1.fetchConsultantById);
  router.get("/investor/:id", userController.v1.fetchInvestorById);
  router.delete("/:id", userController.v1.deleteById);
  router.put("/:id", userController.v1.updateById);

  export function routes(): express.Router {
    return router;
  }
}
