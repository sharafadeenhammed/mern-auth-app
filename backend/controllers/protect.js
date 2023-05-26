import jwt from "jsonwebtoken";
import asyncHandeler from "../midddleware/asyncHandler.js";
import User from "../models/UserModel.js";
asyncHandeler;

const protect = asyncHandeler(async (req, res, next) => {
  const cookie = req.cookies?.jwt;
  if (!cookie) {
    return next(new Error("unauthorized to access this route"));
  }
  const token = jwt.verify(cookie, process.env.JWT_SECRET);
  const user = await User.findById(token.userId).select("-password");
  req.user = user;
  next();
});

export { protect };
