import express from "express"
import { protectedRoutes } from "../../middleware/protectedRoutes"
import { adminRoutes } from "../../middleware/adminRoutes"
import { addTheaterController, getTheaterByIdController } from "../../controller/theaterController"

const router = express.Router()

router.get("/:theaterId" , protectedRoutes , adminRoutes, getTheaterByIdController)
router.post("/" , protectedRoutes , adminRoutes, addTheaterController)

export default router