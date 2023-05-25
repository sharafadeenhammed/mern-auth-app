import asyncHandler from "../midddleware/asyncHandler.js";

//@Desc   Auth user/set token
//@route  POST /api/v1/auth/users/auth
//@access Public
const authUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "user authorized..." });
});

//@Desc   Register user
//@route  POST /api/v1/auth/users/register
//@access Public
const registerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "register user..." });
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
  res.status(200).json({ message: "get user profile..." });
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
