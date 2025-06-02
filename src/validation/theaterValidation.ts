import {z} from "zod"
export const createTheaterSchema = z.object({
    userId : z.number().optional(),
    theaterName : z.string({message : "missing theater name"}) ,
    theaterLocation : z.string({message  : "missing theater location"}),
    theaterCity : z.string({message : "theater city missing"}),
    theaterState :z.string({message : "theater state missing"}),
    theaterPinCode : z.number({message : "theater pin code missing"}),
    capacity : z.number({message : "theater capacity missing"})
})