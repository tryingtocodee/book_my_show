import express from "express"
import { protectedRoutes } from "../../middleware/protectedRoutes"
import { adminRoutes } from "../../middleware/adminRoutes"
import { createMovieController } from "../../controller/movieController"

const router = express.Router()


router.post("/"  , protectedRoutes , adminRoutes , createMovieController)

export default router