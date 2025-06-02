import express from "express"
import dotenv from "dotenv" 
import userRoutes from "./route/v0/userRoutes"
dotenv.config() 

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/v0/user" , userRoutes) // v0 user routes tested - working 


app.listen(port , () => {
    console.log("server started at port " , port)
})