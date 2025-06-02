import { createUserDto } from "../Dto/userDto";
import User from "../db/model/userModel";

export async function createUserRepo(userData : createUserDto) {
    try {
       const user = await User.create({
        username : userData.username,
        password : userData.password,
        email : userData.email,
        profilePic : userData.profilePic
       })

       if(!user){
            throw new Error("Failed to create new user")
       }

       return user
    } catch (e : any) {
        console.log("error in create user repo " , e.message)
        throw new Error("Internal server error")
    }
}

export async function getUserRepo(email : string) {
    try{
        const user = await User.findOne({where : {email : email}})

        if(!user){
            throw new Error("no user with this email found")
        }

        return user
    }catch(e : any){
        console.log("error in getuser repo" , e.message)
        throw new Error("Internal server error")
    }
}