import { createMovieDto } from "../Dto/moviedDto";
import Movie from "../db/model/movieModel";

export async function createMovieRepo(movieData: createMovieDto) {
    try {
        const movie = await Movie.create({
            theaterId: movieData.theaterId,
            movieName: movieData.movieName,
            movieDuration: movieData.movieDuration,
            moviePrice: movieData.moviePrice,
            movieLaunchInTheater: movieData.movieLaunchInTheater,
            movieRemovedFromTheater: movieData.movieRemovedFromTheater
        })

        if(!movie){
            throw new Error("error creating movie")
        }

        return movie
    }catch(e : any){
        console.log("error in create movie repo" , e.message)
        throw new Error("Internal server error")
    }
}