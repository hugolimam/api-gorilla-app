import * as mongoose from "mongoose";
import { resolve } from "dns";
import { rejects } from "assert";
let jwt = require("jsonwebtoken");
function currentIpAddress() {
  let address,
    ifaces = require("os").networkInterfaces();
  for (let dev in ifaces) {
    ifaces[dev].filter((details) =>
      details.family === "IPv4" && details.internal === false
        ? (address = details.address)
        : undefined
    );
  }
  return address === undefined ? "undefined" : address;
}

function isProduction(): string {
  return process.env.NODE_ENV === "production" ? "production" : "development";
}
function logging(msg) {
  console.log(msg);
}

function isObjectId(variable): Promise<string> {
  return new Promise((resolve, reject) => {
    variable === undefined ||
    variable === null ||
    variable === "null" ||
    variable === "undefined" ||
    !mongoose.Types.ObjectId.isValid(variable)
      ? reject(`${variable} is empty or is not a valid objectid param`)
      : resolve(`is object id`);
  });
}

export function generateJwtExpiresIn1h(payload): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      let token = jwt.sign({ data: payload }, process.env.jwt_secret, {
        expiresIn: "1h",
      });
      resolve({ payload: payload, token: token });
    } catch (e) {
      reject(e);
    }
  });
}
export function generateJwtNoExpirationTime(
  payload
): Promise<{ payload: {}; token: string }> {
  return new Promise((resolve, reject) => {
    try {
      let token = jwt.sign({ data: payload }, process.env.jwt_secret);
      resolve({ payload: payload, token: token });
    } catch (e) {
      reject(e);
    }
  });
}
export function verifyJwt(token): Promise<{}> {
  return new Promise((resolve, reject) => {
    try {
      let decodedToken = jwt.verify(token, process.env.jwt_secret);
      resolve(decodedToken);
    } catch (e) {
      reject(e);
    }
  });
}
export function isVariableEmpty(variable): boolean {
  if (
    variable === "" ||
    variable === null ||
    variable === undefined ||
    variable === "null" ||
    variable === "undefined"
  ) {
    return true;
  }
  return false;
}
export { currentIpAddress, isProduction, logging, isObjectId };
