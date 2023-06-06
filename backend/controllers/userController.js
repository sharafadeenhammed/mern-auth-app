import asyncHandler from "../midddleware/asyncHandler.js";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";

//@Desc   Auth user/set token
//@route  POST /api/v1/auth
//@access Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user || !user.matchPassword(password)) {
    res.statusCode = 400;
    return next(new Error("incorrect email or password"));
  }

  // revmove the password field.
  delete user?._doc.password;
  generateToken(res, user._id);
  res.status(200).json({
    message: "success",
    user,
  });
});

//@Desc   Register user
//@route  POST /api/v1/auth/users
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
//@route  POST /api/v1/auth/logout
//@access Public
const logoutUser = asyncHandler(async (req, res, next) => {
  res
    .cookie("jwt", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "developement",
      expires: new Date(0),
    })
    .status(200)
    .json({ message: "success" });
  console.log(new Date(0));
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
  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) return next(new Error("user profile not found"));
  user.name = name || user.name;
  user.email = email || user.email;
  if (password !== "" && password !== undefined) {
    user.password = password;
  }
  await user.save();
  res.status(200).json({
    message: "success",
    updatedData: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
