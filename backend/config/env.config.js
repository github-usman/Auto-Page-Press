import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// server connectivity
const server = {
  serverMode: process.env.SERVER_MODE,
  serverPort: process.env.SERVER_PORT,
};

// database connectivity
const database = {
  dbUri: process.env.DB_URI,
  dbName: process.env.DB_NAME,
};

export const { serverMode, serverPort } = server;
export const { dbUri, dbName } = database;
