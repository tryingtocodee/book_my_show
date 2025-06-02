import { Request , Response } from "express"
import { createMovieService } from "../service/movieService"
import { createMovieSchema } from "../validation/movieValidation"

export async function createMovieController(req : Request , res : Response) :Promise<any> {
    try{
        const validation = createMovieSchema.safeParse(req.body)

        if(!validation.success){
            return res.status(411).json({
                msg : "Incorrect input",
                error : validation.error.errors
            })
        }

        const movie = await createMovieService(validation.data)

        if(!movie){
            return res.status(500).json("failed to create new movie")
        }
        return res.json({
            msg : "new movie created",
            movie : movie
        })
        
    }catch(e : any){
        console.log("error in create movie controller" , e.message)
        return res.status(500).json("Internal server errro")
    }
}