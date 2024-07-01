import express from "express";
import dotenv from "dotenv";
import cors from "cors";





const app = express();
dotenv.config({path: "./config/config.env"});


app.use(cors({
     origin: [process.env.PORTFOLIO_URL, process.env.DASHBORD_URL],
     methods: ["GET", "POST", "DELETE", "PUT"],
     credentials: true,
}));


export default app;