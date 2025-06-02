import { createBookingDto } from "../Dto/bookingDto";
import { createMovieDto } from "../Dto/moviedDto";
import { createMovieRepo } from "../repository/movieRepo";

export async function createMovieService(movieData : createMovieDto){
    const movie = await createMovieRepo(movieData)

    return movie
}