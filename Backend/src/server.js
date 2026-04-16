import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import path from "path"

import notesRoutes from "../src/routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import authRoutes  from '../src/routes/authRoutes.js';



dotenv.config();

const app = express();
const __dirname = path.resolve()



//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(
        cors({
            origin: "http://localhost:5173"
        })
    );
}

app.use(express.json())
app.use(rateLimiter)



app.use("/api/notes", notesRoutes);
app.use('/api/auth',  authRoutes);
app.use('/api/notes', notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")))

    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"))
    })
}


connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server started on port: 5001");
    });
});



