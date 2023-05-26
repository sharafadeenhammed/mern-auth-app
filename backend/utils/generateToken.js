import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: 10 * 60, // value in seconds...
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "developement",
    sameSite: "strict",
    maxAge: 10 * 60 * 1000, //value in milliseconds...
  });
};

export default generateToken;
