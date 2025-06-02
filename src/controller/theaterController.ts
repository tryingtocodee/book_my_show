
import { Request , Response } from "express"
import { createTheaterService, getTheaterByIdService } from "../service/theaterService"
import { createTheaterSchema } from "../validation/theaterValidation"

export async function getTheaterByIdController(req : Request , res : Response ) :Promise<any>{
    try{
        const theaterId = parseInt(req.params.theaterId)

        if(!theaterId){
            return res.status(411).json("pass theater id in params")
        }

        const theater = getTheaterByIdService(theaterId)

        if(!theater){
            return res.status(500).json("Failed to get theater by id ")
        }

        return res.json({
            msg : "got theater",
            theater : theater
        })

    }catch(e : any){
        console.log("error in get theater by id controller" , e.message)
        return res.status(500).json("Internal server error")
    }
}

export async function addTheaterController(req : Request , res : Response):Promise<any>{
    try{
        const validation = createTheaterSchema.safeParse(req.body)

        if(!validation.success){
            return res.status(411).json({
                msg : "incorrect inputs",
                error : validation.error.errors
            })
        }

        const user = req.user.id

        const validateInput = {
            ...validation.data,
            userId : user
        }

        const theater = await createTheaterService(validateInput)

        if(!theater){
            return res.status(500).json("failed to create new theater")
        }

        return res.json({
            msg : "new theater created",
            theater : theater
        })
    }catch(e : any){
        console.log("error in add theater controller ", e.message)
        return res.status(500).json("Internal server error")
    }
}