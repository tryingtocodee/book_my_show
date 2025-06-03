import express from "express"
import { createBookingController } from "../../controller/bookingController"
import { protectedRoutes } from "../../middleware/protectedRoutes"

const router = express.Router()

router.post("/"  , protectedRoutes , createBookingController)

export default router