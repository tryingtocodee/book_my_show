import Theater from "../db/model/theaterModel";
import { createTheaterDto } from "../Dto/theaterDto";

export async function createTheaterRepo(theaterData : createTheaterDto) {
    try{
        const theater = await Theater.create({
            userId : theaterData.userId,
            theaterName : theaterData.theaterName,
            theaterCity : theaterData.theaterCity,
            theaterLocation : theaterData.theaterLocation,
            theaterPinCode : theaterData.theaterPinCode,
            theaterState : theaterData.theaterState,
            capacity : theaterData.capacity
        })

        if(!theater){
            throw new Error("failed to create new theater")
        }
        return theater
    }catch(e : any){
        console.log("error in create theater repo " , e.message)
        throw new Error("Internal server error")
    }
}

export async function getTheaterByIdRepo(id : number){
    try{
        const theater = await Theater.findByPk(id)  

        if(!theater){
            throw new Error("couldnt find theater with this id")
        }

        return theater
    }catch(e : any){
        console.log("error in get theater", e.message)
        throw new Error("Internal server error")
    }
}