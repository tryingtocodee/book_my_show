import express from "express"
import dotenv from "dotenv" 
import userRoutes from "./route/v0/userRoutes"
import theaterRoutes from "./route/v0/theaterRoutes"
import cookieParser from "cookie-parser"
import bookingRoutes from "./route/v0/bookingRoute"
import movieRoutes  from "./route/v0/movieRoute"
import confirmBookingRoutes from "./route/v0/confirmBookingRoute"

dotenv.config() 

const app = express()
const port = process.env.PORT
app.use(cookieParser())
app.use(express.json())
app.use("/api/v0/user" , userRoutes) // v0 user routes tested - working 
app.use("/api/v0/theater" , theaterRoutes) // v0 routes tested - working
app.use("/api/v0/booking" , bookingRoutes) // v0 routes tested - working
app.use("/api/v0/movie" , movieRoutes) // v0 routes tested - working
app.use("/api/v0/confirm-booking" , confirmBookingRoutes)

app.listen(port , () => {
    console.log("server started at port " , port)
})