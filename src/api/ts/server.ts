import * as http from "http";
import configServer from "./config/express";
import {
  generateJwtNoExpirationTime,
  logging,
  isProduction,
} from "./utils/functions";

import { connectMongodb } from "./config/mongodb/db";
http.createServer(configServer()).listen(process.env.api_port, async () => {
  await connectMongodb().then(console.log).catch(console.log);
  logging(`[ok] - server running in '${isProduction()}' environment;`);
  logging(`[ok] - server running on port: ${process.env.api_port};`);
});
