import { Express } from "express";
import { carsRouter } from "./api/cars/router";

export function initRouter(app: Express) {
	app.use("/cars", carsRouter);
}
