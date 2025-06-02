import {Request , Response} from "express"
import { createUserService, loginUserService } from "../service/userService"
import { loginSchema, signUpSchema } from "../validation/userValidation"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { setCookie } from "../util/setCookie"

dotenv.config()

const jwtSecret = process.env.JWT_SECRET

export async function signUpController(req : Request , res : Response) : Promise<any> {
    try{
        const validation = signUpSchema.safeParse(req.body)

        if(!validation.success){
            return res.status(411).json({
                msg : "incorrect input",
                error : validation.error.errors
            })
        }

        const user = await createUserService(validation.data)

        if(!user){
            return res.status(500).json("Failed sign up operation")
        }

        if(!jwtSecret){
            console.log("jwt secret not found")
            throw new Error("Internal server error")
        }

        const token = jwt.sign({email : user.email} , jwtSecret , {expiresIn : "1h"})

        setCookie(token , res )

        return res.json({
            msg : "user created successfully",
            user : {
                username : user.username ,
                email : user.email ,
                profilePic : user.profilePic ,
                userType : user.userType
            }
        })
    }catch(e : any){
        console.log("error in sign up controller " , e.message)
        return res.status(500).json("Internal server error")
    }
}


export async function loginController(req : Request , res : Response) : Promise<any> {
    try{
        const validation = loginSchema.safeParse(req.body)

        if(!validation.success){
            return res.status(411).json({
                msg : "incorrect input",
                error : validation.error.errors
            })
        }

        const user = await loginUserService(validation.data)

        if(!user){
            return res.status(411).json("failed to login user")
        }
        return res.json({
            msg : "user logged in successfully",
            user : {
                email : user.email
            }
            
        })
        
    }catch(e : any){
        console.log("error in sign up controller " , e.message)
        return res.status(500).json("Internal server error")
    }
}