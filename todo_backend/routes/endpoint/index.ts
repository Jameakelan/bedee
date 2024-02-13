///
/// Endpoints center
///

import { Router } from "express";
import userRouter from "./user";
import todoRouter from "./todo";

const endpoints = Router();

endpoints.get("/", (req: any, res: any) => {
  res.json({
    message: "Welcome to the Todo API",
  });
});

endpoints.use("/user", userRouter);
endpoints.use("/todo", todoRouter);

export default endpoints;
