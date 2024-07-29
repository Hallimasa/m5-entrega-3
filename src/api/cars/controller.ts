import { Response, Request, response } from "express";
import { inject, injectable } from "tsyringe";
import { ICarService } from "./interface";

@injectable()
export class CarsController {
	constructor(@inject("CarsService") private carsService: ICarService) {}

	public create = async (req: Request, res: Response) => {
		const car = await this.carsService.create(req.body);
		return res.status(201).json(car);
	};
	public findOne = async (req: Request, res: Response) => {
		const foundCar = await this.carsService.findOne(req.params.id);
		return res.status(200).json(foundCar);
	};
	public findAll = async (req: Request, res: Response) => {
		const foundCars = await this.carsService.findMany();
		return res.status(200).json(foundCars);
	};
	public update = async (req: Request, res: Response) => {
		const updatedCar = await this.carsService.update(
			req.params.id,
			req.body
		);
		return res.status(200).json(updatedCar);
	};
	public delete = async (req: Request, res: Response) => {
		const carDeleted = await this.carsService.delete(req.params.id);
		return res.status(200).json();
	};
}
