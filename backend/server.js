import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import cookies from "cookie-parser";
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

// mounting cors
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// mounting morgan middleware for developement...
app.use(morgan("dev"));

// mount body parsers...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mounting cookie parser
app.use(cookies());

app.use("/api/v1/auth", userRoutes);

app.use(notFound, errorHandeler);

app.listen(PORT, () => {
  console.log(`server runnning on port ${PORT}`.blue.underline.inverse);
});
