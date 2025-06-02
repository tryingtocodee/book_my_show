import { NextFunction , Request , Response } from "express"; 
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
import { getUserRepo } from "../repository/userRepo";

dotenv.config()

const jwtSecret = process.env.JWT_SECRET

interface IUser {
    id : number,
    username : string,
    email : string,
    password : string,
    userType : string
    profilePic : string

}

declare global {
    namespace Express {
        interface Request {
            user : IUser
        }
    }
}

export async function protectedRoutes (req  : Request , res : Response , next : NextFunction) :Promise<any>{
    try{
        const token = req.cookies.token 

        if(!token){
            return res.status(411).json("no token found login again")
        }

        if(!jwtSecret){
            console.log("jwt secret not found in protected routes")
            return res.status(500).json("Internal server error")
        }

        const verifyToken = jwt.verify(token , jwtSecret) as JwtPayload

        if(!verifyToken){
            return res.status(411).json("Incorrect token login again ")
        }
        const email = verifyToken.email
        const user = await getUserRepo(email)

        
        req.user = user as IUser

        next()
    }catch(e : any){
        console.log("error in protectedRoutes " , e.message)
        return res.status(500).json("Internal server error")
    }
}