import express from "express";
import app from "./app.js";
import { serverMode, serverPort } from "./config/env.config.js";

const server = express();
server.use("/api/v1", app);

server.listen(serverPort, () => {
  console.log(
    `server is running on port : \x1b[43m${serverPort}\x1b[0m in \x1b[47m${serverMode}\x1b[0m mode`
  );
});
