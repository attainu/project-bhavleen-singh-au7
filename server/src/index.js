import express from "express";
import "dotenv/config";
import "./db/mongoose";
import userRouter from "./routers/user";
import postRouter from "./routers/post";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);
app.use(postRouter);

app.listen(PORT, () =>
  console.log(`Server is up on port ${PORT}`)
);
