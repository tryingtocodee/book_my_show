import { createTheaterDto } from "../Dto/theaterDto";
import { createTheaterRepo, getTheaterByIdRepo } from "../repository/theaterRepo";

export async function createTheaterService(theaterData : createTheaterDto ) {
    const theater = await createTheaterRepo(theaterData)
    return theater
}

export async function getTheaterByIdService(id :  number){
    const theater = getTheaterByIdRepo(id)

    return theater
}