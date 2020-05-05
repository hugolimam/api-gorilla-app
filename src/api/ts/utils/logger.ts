let logger = require("../config/winstonlogger");
import * as datetime from "../utils/datetime";
import {currentIpAddress} from '../utils/functions'

export function generateInfoLog(req, res) {
  let loginfo = `Server => ${currentIpAddress()}. Response status => ${res.statusCode}. Method => ${
    req.method
  }. Route => ${req.originalUrl}. Request from IP => ${
    req.ip
  }. Date => ${datetime.current_date()}.`;

  logger.info(loginfo);
}
export function generateErrorLog(req, res) {
  let logerror = `Server => ${currentIpAddress()}. Response status => ${res.statusCode}. Method => ${
    req.method
  }. Route => ${req.originalUrl}. Request from IP => ${
    req.ip
  }. Date => ${datetime.current_date()}. Server => ${currentIpAddress()}`;

  logger.error(logerror);
}
