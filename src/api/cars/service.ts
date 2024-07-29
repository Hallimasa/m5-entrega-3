import { prisma } from "../../database/prisma";
import { injectable } from "tsyringe";
import { CarCreate, CarUpdate } from "./interface";

@injectable()
export class CarsService {
	public create = async (payload: CarCreate) => {
		const createdCar = await prisma.cars.create({ data: payload });
		return createdCar;
	};
	public findOne = async (carId: string) => {
		return await prisma.cars.findUnique({ where: { id: carId } });
	};
	public findMany = async () => {
		return await prisma.cars.findMany();
	};
	public update = async (carId: string, payload: CarUpdate) => {
		return await prisma.cars.update({
			where: { id: carId },
			data: payload,
		});
	};
	public delete = async (carId: string) => {
		const deletedCar = await prisma.cars.delete({ where: { id: carId } });
		return deletedCar;
	};
}
