import { Request , Response } from "express"

export async function createBookingController(req : Request , res : Response) :Promise<any> {
    try{

    }catch(e : any){
        console.log("error in create booking controller" , e.message)
        return res.status(500).json("Internal server error")
    }
}