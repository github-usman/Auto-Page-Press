import express from "express";
import bodyParser from "body-parser";
import greeting from "./routes/greeting.route.js";
import connectMongoDB from "./database/db.js";

connectMongoDB();

const app = express();
app.use(bodyParser.json());
app.use("", greeting);

export default app;
