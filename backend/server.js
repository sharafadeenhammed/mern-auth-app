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

const app = express();
app.use(morgan("dev"));

app.use("/api/v1/auth", userRoutes);

app.use(notFound, errorHandeler);
app.listen(PORT, () => {
  console.log(`app runnning on port ${PORT}`.blue.underline.inverse);
});
