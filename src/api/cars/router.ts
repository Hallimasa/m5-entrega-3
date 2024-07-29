import { Router } from "express";
import { container } from "tsyringe";
import { CarsService } from "./service";
import { CarsController } from "./controller";

export const carsRouter = Router();

container.registerSingleton("CarsService", CarsService);
const carsController = container.resolve(CarsController);

carsRouter.post("", carsController.create);
carsRouter.get("/:id", carsController.findOne);
carsRouter.get("", carsController.findAll);
carsRouter.patch("/:id", carsController.update);
carsRouter.delete("/:id", carsController.delete);
