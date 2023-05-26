import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import cookie from "cookie-parser";
// load enviroment variables...
dotenv.config();
const PORT = process.env.NODE_PORT || 5000;

//import router logics...
import userRoutes from "./routes/userRoutes.js";
import { errorHandeler, notFound } from "./midddleware/errorHandeler.js";
import connectDb from "./config/db.js";
import User from "./models/UserModel.js";

const app = express();

//connet to database...
connectDb();

// mounting morgan middleware for developement...
app.use(morgan("dev"));

// mount body parsers...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mounting cookie parser
app.use(cookie());

app.use("/api/v1/auth", userRoutes);

// app.get("/api/v1/get", async (req, res, next) => {
//   const data = await User.find();
//   res.json(data);
// });

app.use(notFound, errorHandeler);

app.listen(PORT, () => {
  console.log(`app runnning on port ${PORT}`.blue.underline.inverse);
});
