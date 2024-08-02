import { jwtSecret } from "../config/env.config.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import catchAysncErrors from "./catchAysncErrors.js";
import ErrorHandler from "../utils/error-handler.js";

// user authenticated
export const isAuthenticatedUser = catchAysncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodeData = jwt.verify(token, jwtSecret);
  req.user = await userModel.findById(decodeData.id);

  next();
});
