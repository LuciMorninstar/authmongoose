import express from "express"
import "dotenv/config";
import connectDB from "./configs/connectDB.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors"

const app = express();

const port = process.env.port

app.get("/",(req,res,next)=>{
    res.json({message:"Hey"})
})


app.use(express.json());

app.use(cors());

app.use("/api/user",userRoute);

connectDB();





app.listen(9000,()=>{
    console.log(`The server has been established on http://localhost:${port}`);
})