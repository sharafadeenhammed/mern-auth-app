import asyncHandler from "../midddleware/asyncHandler.js";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";

//@Desc   Auth user/set token
//@route  POST /api/v1/auth/users/auth
//@access Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.matchPassword(password)) {
    res.statusCode = 400;
    return next(new Error("incorrect email or password"));
  }

  // revmove the password field.
  delete user._doc.password;
  generateToken(res, user._id);
  res.status(200).json({
    message: "success",
    user,
  });
});

//@Desc   Register user
//@route  POST /api/v1/auth/users/register
//@access Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    res.statusCode = 400;
    return next(new Error(`user with email: ${email} already exist...`));
  }

  user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.statusCode = 400;
    throw "invalid user data...";
  }

  generateToken(res, user._id);
  res.status(201).json({
    message: "success",
    _id: user._id,
    name,
    email,
  });
});

//@Desc   Logout user
//@route  POST /api/v1/auth/users/register
//@access Public
const logoutUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "logout user..." });
});

//@Desc   Get user profile
//@route  GET /api/v1/auth/users/profile
//@access Public
const getUserProfile = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "success", userData: req.user });
});

//@Desc   Update user profile
//@route  PUT /api/v1/auth/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "update user profile..." });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
