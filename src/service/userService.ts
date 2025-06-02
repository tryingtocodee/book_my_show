import cloudinary from "../config/cloudinaryConfig";
import User from "../db/model/userModel";
import { createUserDto, loginUserDto } from "../Dto/userDto";
import { createUserRepo, getUserRepo } from "../repository/userRepo";
import b from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { setCookie } from "../util/setCookie";

dotenv.config()


export async function createUserService(userData : createUserDto){
    try{
        const hashedPassword = await b.hash(userData.password , 10 )

        userData.password = hashedPassword

        if(userData.profilePic){
            const uploadImage = await cloudinary.uploader.upload(userData.profilePic)
            userData.profilePic = uploadImage.secure_url
        }
        const user = await createUserRepo(userData)
        
        if(!user){
            throw new Error("failed to create new user")
        }

        return user
    }catch(e : any){
        console.log("error in createUser service ", e.message)
        throw new Error("Internal server error")
    }
}

export async function loginUserService(userData : loginUserDto){
    try {
        const user = await getUserRepo(userData.email)

        const verifyPassword = await b.compare(userData.password , user.password)

        if(!verifyPassword){
            throw new Error("incorrect password")
        }

        return user
        
    } catch (e : any) {
       console.log("error in login user service ", e.message)
       throw new Error("Internal server error") 
    }
}