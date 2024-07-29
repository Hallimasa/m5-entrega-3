import { z } from "zod";

export const carSchema = z.object({
	id: z.string().uuid(),
	name: z.string().max(255),
	description: z.string().max(255).optional(),
	brand: z.string().max(255),
	year: z.number().int(),
	km: z.number(),
});

export const carCreateSchema = carSchema.omit({
	id: true,
});

export const carUpdateSchema = carCreateSchema.partial();
