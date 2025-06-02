import express from "express"
import dotenv from "dotenv" 
import userRoutes from "./route/v0/userRoutes"
import theaterRoutes from "./route/v0/theaterRoutes"
import cookieParser = require("cookie-parser")

dotenv.config() 

const app = express()
const port = process.env.PORT
app.use(cookieParser())
app.use(express.json())
app.use("/api/v0/user" , userRoutes) // v0 user routes tested - working 
app.use("/api/v0/theater" , theaterRoutes)

app.listen(port , () => {
    console.log("server started at port " , port)
})