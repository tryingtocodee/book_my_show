import {z} from "zod"

export const createBookingSchema = z.object({
    userId : z.number().optional(),
    theaterId : z.number({message : "theater id missing"}),
    movieId : z.number({message : "movieId missing"}),
    idempotencyKey :z.string().optional()
})