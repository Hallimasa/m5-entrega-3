import { carCreateSchema, carUpdateSchema, carSchema } from "./schema";
import { z } from "zod";

export type Car = z.infer<typeof carSchema>;
export type CarCreate = z.infer<typeof carCreateSchema>;
export type CarUpdate = z.infer<typeof carUpdateSchema>;

export interface ICarService {
	create(payload: CarCreate): Promise<Car>;
	findOne(id: string): Promise<Car>;
	findMany(): Promise<Car[]>;
	update(id: string, payload: CarUpdate): Promise<Car>;
	delete(id: string): Promise<void>;
}
