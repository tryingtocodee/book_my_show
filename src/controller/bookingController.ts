import { Request , Response } from "express"
import { createBookingSchema } from "../validation/bookingValidation"
import { createBookingRepo } from "../repository/bookingRepo"
import { createBookingService } from "../service/bookingService"
import { createIdempotencyKey } from "../util/idempotencyKey"

export async function createBookingController(req : Request , res : Response) :Promise<any> {
    try{
        const validation = createBookingSchema.safeParse(req.body)

        if(!validation.success){
            return res.status(411).json({
                msg : "incorrect input",
                error : validation.error.errors
            })
        }
        const userId = req.user.id

        const key =  createIdempotencyKey()

        const validationInput = {
            ...validation.data,
            userId : userId,
            idempotencyKey : key
        }

        const booking = await createBookingService(validationInput)

        if(!booking){
            return res.status(500).json("Failed to create booking")
        }

        return res.json({
            msg : "created booking",
            booking : booking
        })

    }catch(e : any){
        console.log("error in create booking controller" , e.message)
        return res.status(500).json("Internal server error")
    }
}