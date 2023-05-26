import jwt from "jsonwebtoken";
import asyncHandeler from "../midddleware/asyncHandler";
asyncHandeler;

const protect = asyncHandeler(async (req, res, next) => {
  const token = req.cookie;
  console.log(cookie);
  const { email, password } = req.body;
  const userId = jwt.verify(token, process.env.JWT_SECRET);
  if (!token) {
  } else {
  }
});

export { protect };
