import mongoose from "mongoose";
export const ConnectDb = async()=>{
    try{
mongoose.connect(process.env.Mongo_url)
console.log("Database is Connected", process.env.Mongo_url);

    }
    catch(err){
        console.log(err);
        process.exit(1);
        
    }
}