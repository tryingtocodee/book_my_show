import express from "express"
import { confirmBookingController } from "../../controller/confirmBookingController"
import { protectedRoutes } from "../../middleware/protectedRoutes"

const router = express.Router()

router.post("/:bookingId"  , protectedRoutes , confirmBookingController)

export default router