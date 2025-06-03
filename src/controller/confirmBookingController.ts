import { Request , Response } from "express"
import { confirmBookingService } from "../service/bookingService"

export async function confirmBookingController(req : Request , res : Response) :Promise<any> {
    try{
        const bookingId = parseInt(req.params.bookingId)

        const confirmBooking = await confirmBookingService(bookingId)

        if(!confirmBooking){
            return res.status(400).json("failed to confirm booking")
        }

        return res.json({
            msg : "booking confirmed",
            confirmBooking : confirmBooking
        })
    }catch(e : any){
        console.log("error in confirm booking controller" , e.message)
        return res.status(500).json({error : e.message})
    }
}