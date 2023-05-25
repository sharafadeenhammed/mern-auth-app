import express from "express";
import morgan from "morgan";
import colors from "colors";
import path from "path";
import dotenv from "dotenv";
// load enviroment variables...
dotenv.config();
const PORT = process.env.NODE_PORT || 5000;

//import router logics...
import userRoutes from "./routes/userRoutes.js";
import { errorHandeler, notFound } from "./midddleware/errorHandeler.js";
import connectDb from "./config/db.js";

const app = express();

//connet to database...
connectDb();

// mounting morgan middleware for developement...
app.use(morgan("dev"));

// mount body parsers...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", userRoutes);

app.use(notFound, errorHandeler);

app.listen(PORT, () => {
  console.log(`app runnning on port ${PORT}`.blue.underline.inverse);
});
