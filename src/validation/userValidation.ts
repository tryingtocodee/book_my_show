import {z} from "zod"

export const signUpSchema = z.object({
    username : z.string({message : "username missing"}),
    email : z.string().email({message : "email missing"}),
    password : z.string({message : "password missing"}),
    profilePic : z.string().url({message : "pass valid url"}).optional()
})

export const loginSchema = z.object({
    email : z.string().email({message : "email missing"}),
    password : z.string({message : "password missing"})
})