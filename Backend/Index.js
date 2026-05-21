import app from "express"
import { configDotenv } from "dotenv"

const port = 5500
app.listen(port,()=>{
    console.log(`Server is running on the port`)
})