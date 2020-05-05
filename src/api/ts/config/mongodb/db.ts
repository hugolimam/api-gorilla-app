import * as mongoose from "mongoose";
export function connectMongodb(): Promise<typeof mongoose | Error | string> {
  return new Promise((resolve, reject) => {
    const uri: string = `mongodb://${process.env.db_mongo_user}:${process.env.db_mongo_password}@${process.env.db_mongo_host}:27017/${process.env.db_mongo}?authSource=admin`;
    mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err: Error) => {
        if (err) {
          reject(err.message);
        } else {
          resolve("[ok] - mongodb connection successfully created;");
        }
      }
    );
  });
}
