import {z} from "zod"

export const createMovieSchema = z.object({
    
    theaterId : z.number({message : "theater id missing"}),
    movieName : z.string({message : "movie name missing"}),
    movieDuration : z.string({message : "movie duration missing"}),
    moviePrice : z.number({message : "movie price missing"}),
    movieLaunchInTheater : z.preprocess((args)=> {if (typeof args == "string") return new Date(args)}, z.date()),
    movieRemovedFromTheater : z.preprocess((args) => {if (typeof args == "string") return new Date(args)} , z.date())

})