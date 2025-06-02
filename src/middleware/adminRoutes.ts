import { NextFunction  , Request , Response} from "express";

export async function adminRoutes(req : Request , res : Response , next : NextFunction):Promise<any>{
    try{
        const user = req.user

        if(user.userType != "admin"){
            return res.status(411).json("only admins can access this route")
        }
        next() 
    }catch(e : any){
        console.log("error in admin Routes" , e.message)
        return res.status(500).json("Internal server error")
    }
}