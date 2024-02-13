import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import ApiResponse from "./models/ApiReponse";
import router from "./routes/indext";
import middleware from "./middlewares";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(middleware);
app.use(router);

app.listen(PORT, () => {
  console.log(`PORT: ${PORT}, hope you enjoy your daily tasks.`);
});
