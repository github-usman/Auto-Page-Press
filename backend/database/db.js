import mongoose from "mongoose";
import { dbUri, dbName } from "../config/env.config.js";

const connectMongoDB = () => {
  mongoose
    .connect(dbUri, { dbName })
    .then(() => console.log(`DB is \x1b[45mconnected\x1b[0m successfully.`))
    // *************ERROR HANDLE WITH SHOUTDOWN SERVER*************
    .catch((err) => console.log(`Unable to connect with DB due to : ${err}`));
};

export default connectMongoDB;
