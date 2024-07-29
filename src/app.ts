import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import { initRouter } from "./router";

export const app = express();

app.use(json());
app.use(cors());
app.use(helmet());

initRouter(app);
// app.use(handleGlobalErrors);
