import mongoose from "mongoose";
import "dotenv/config";



 const connectDB = async()=>{
    try {

       await mongoose.connect(process.env.databaseURL);
       console.log("Database has been connected");
  
    } catch (error) {
        console.log(error, "Error connecting to the database")
        
    }
}

export default connectDB;