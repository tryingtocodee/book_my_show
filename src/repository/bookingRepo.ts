import { Op, Transaction } from "sequelize";
import Booking from "../db/model/bookingModel";
import { createBookingDto } from "../Dto/bookingDto";
import {validate as isValidUUID} from "uuid"


export async function createBookingRepo(bookingData : createBookingDto ) {
    try{

        const booking = await Booking.create({
            userId : bookingData.userId,
            theaterId : bookingData.theaterId,
            movieId : bookingData.movieId,
            idempotencyKey : bookingData.idempotencyKey
        })

        if(!booking){
            throw new Error("failed to create new booking")
        }

        return booking
    }catch(e : any){
        console.log("error in create booking repo")
        throw new Error("Internal server error")
    }
}

export async function confirmBookingRepo(id : number , t : Transaction){
    try{
        const booking = await Booking.findOne({where : {id : id} , transaction : t})

        if(!booking){
            throw new Error("no booking found with this id")
        }

        

        booking.bookingStatus = "confirm"

        await booking.save({transaction : t})

        return booking

    }catch(e : any){
        console.log("error in confirm booking repo" , e.message)
        throw new Error ("Internal server error")
    }
}

export async function getIdempotencyKeyWithLockRepo(t : Transaction , key : string){
    try{
        if(!isValidUUID(key)){
           throw new Error("Invalid idempotency key") 
        }

        const data = await Booking.findOne({where : {idempotencyKey : key  } , transaction : t , lock : t.LOCK.UPDATE })

        if(!data){
            throw new Error("Idempotency key not found")
        }

        return data
        
    }catch(e : any){
        console.log("error in get idempotency key repo" , e.message)
        throw new Error("Internal server error")
    }
}

export async function getBookingByIdRepo(id : number){
    try{
        const booking = await Booking.findByPk(id)

        if(!booking){
            throw new Error("no booking found with this")
        }

        return booking
    }catch(e : any){
        console.log("error in get booking by id repo")
        throw new Error("Internal server error")
    }
}