import express from "express"
import { loginController , signUpController } from "../../controller/userController" 

const router = express.Router()

router.post("/login" , loginController)
router.post("/signup" , signUpController)

export default router