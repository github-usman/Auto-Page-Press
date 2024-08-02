import catchAysncErrors from "../../middlewares/catchAysncErrors.js";
import userModel from "../../models/user.model.js";
import ErrorHandler from "../../utils/error-handler.js";
import sendToken from "../../utils/jwt-tokens.js";

// register user
export const registerUser = catchAysncErrors(async (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    return next(
      new ErrorHandler(
        "User is already Exist please Login or create new Account",
        209
      )
    );
  }
  const user = await userModel.create({
    first_name,
    last_name,
    email,
    password,
  });
  sendToken(user, 200, res);
});

// login user
export const loginUser = catchAysncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking credentials verfication
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isAuthenticatedUser = user.comparePassword(password);

  if (!isAuthenticatedUser) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});

// Get user
export const profileUser = catchAysncErrors(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// update user
export const updateUser = catchAysncErrors(async (req, res, next) => {
  const newData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    passwor: req.body.password,
  };

  const user = await userModel.findByIdAndUpdate(req.user.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// delete user
export const deleteUser = catchAysncErrors(async (req, res, next) => {
  await userModel.findByIdAndDelete(req.user.id);
  res.clearCookie("token", {
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Deleted Your Account Successfully",
  });
});

// logout user
export const logoutUser = catchAysncErrors(async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Loggout Successfully",
  });
});
