import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as all from "../routes/all";
import * as methodOverride from "method-override";
let morgan = require("morgan");
let logger = require("morgan");
let winston = require("./winstonlogger");
import * as contants from "../utils/constants";
import { verifyJwt, isVariableEmpty } from "../utils/functions";

import * as customlogger from "../utils/logger";
export default function () {
  let app = express();
  if (process.env.show_api_doc === "true") {
    app.use(
      "/api/v1/doc/:token",
      (req, res, next) => {
        let token = req.params.token;
        if (isVariableEmpty(token)) {
          res.status(500).json({
            status: false,
            result: `token wasn't informed in request params; ex: /api/v1/doc/<token>`,
          });
        } else {
          token = token.replace("Bearer ", "");
          verifyJwt(token)
            .then(() => next())
            .catch((e) => {
              res.statusCode = 500;
              customlogger.generateErrorLog(req, res);
              res.status(500).json({
                status: false,
                result: { custom_msg_error: `invalid token`, error: e },
              });
            });
        }
      },
      express.static("api-doc")
    );
  }
  app.enable("trust proxy");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(logger("dev"));
  app.use(morgan("combined", { stream: winston.stream }));
  app.use(methodOverride());
  app.use(helmet());
  app.disable("X-powered-by");

  app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");

    if (req.method.toLowerCase() === "options") {
      //o methodoverride permite que seja acessível o options do req
      res.header("Allow", "GET, PUT, POST, DELETE, PATCH").status(200).json({});
      return;
    }
    return next();
  });

  //faltando implementar a verificação do referrer na requisição da API

  // Aqui se associa todas as rotas da
  // versão 1 (v1) definidas no routes/all.ts
  // à rota raiz '/'.
  app.use("/", all.v1.routes());

  app.use((req: Request, res: any, next: NextFunction) => {
    if (!res.success) {
      if (res.statusCode == 500) {
        customlogger.generateErrorLog(req, res);
      } else {
        res.status(404).send({ status: "false", data: "endpoint not found" });
        customlogger.generateErrorLog(req, res);
      }
    } else {
      customlogger.generateInfoLog(req, res);
    }
  });

  return app;
}
