import express from "express"
import dotenv from "dotenv"
import Goalroute from "./Routes/GoalRoute.js"
import Userroute from "./Routes/UserRoute.js"
import { errorHandler } from "./Middlewares/ErrorHandler.js"
import { ConnectDb } from "./Database/GoalDatabase.js"
const app = express()
dotenv.config()   
const port = process.env.PORT || 4000
app.use(express.json())
app.use("/goal",Goalroute)
app.use("/user",Userroute)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is running on the ${port}`)
    ConnectDb()
})