import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import greeting from "./routes/greeting.route.js";
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js";
import connectMongoDB from "./database/db.js";
import customErrorMiddleware from "./middlewares/customErrorMiddleware.js";

connectMongoDB();
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// parent routes
app.use("", greeting);
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use(customErrorMiddleware);

export default app;
