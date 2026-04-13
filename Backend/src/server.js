import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "../src/routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();



//middleware
app.use(cors())
app.use(express.json())
app.use(rateLimiter)



app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server started on port: 5001");
    });
});



