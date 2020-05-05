import * as express from "express";
import * as accessLevelController from "../controllers/accessLevel";

export namespace v1 {
  let router = express.Router();

  router.get("/", accessLevelController.v1.fetchAll);
  router.post("/", accessLevelController.v1.add);
  router.get("/:id", accessLevelController.v1.fetchById);
  router.delete("/:id", accessLevelController.v1.deleteById);
  router.put("/:id", accessLevelController.v1.updateById);

  export function routes(): express.Router {
    return router;
  }
}
