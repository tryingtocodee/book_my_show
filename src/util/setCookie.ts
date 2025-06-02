import { Response } from "express";

export async function setCookie(token : string , res : Response){
    try{
        res.cookie("token" , token , {
            maxAge : 60 * 60 * 1000,
            httpOnly : true,
            sameSite : "strict"
        })
    }catch(e : any){
        console.log("error setting cookie " , e.message)
        return res.status(500).json("Internal server error")
    }
}