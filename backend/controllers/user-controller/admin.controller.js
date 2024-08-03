import catchAysncErrors from "../../middlewares/catchAysncErrors.js";
import userModel from "../../models/user.model.js";

// Get all user

export const getAllUser = catchAysncErrors(async (req, res, next) => {
  const userCount = await userModel.countDocuments();
  const user = await userModel.find();

  res.status(200).json({
    success: true,
    user,
    userCount,
  });
});
