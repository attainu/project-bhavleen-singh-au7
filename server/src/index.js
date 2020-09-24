import express from "express";
import "dotenv/config";
import "./db/mongoose";
import userRouter from "./routers/user";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
