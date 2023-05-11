import express  from "express";
import mongoose from "mongoose";
import cors from "cors";

// importing routes to seperate code
import { userRouter } from "./routes/users.js";
import { homeRouter } from "./routes/home.js"
import { testiRouter } from "./routes/testimonials.js";
import { coursesRouter } from "./routes/courses.js"
import { courseModelRouter } from "./routes/courseModule.js"
import { displayVideoRouter } from "./routes/displayVideo.js";
import { adminRouter } from "./routes/adminRoute.js"

const app=express();

app.use(express.json());
app.use(cors());    // Cross Origin Resource Sharing

// for reducing code complexity router code is written in userRouter
app.use(userRouter);
app.use(homeRouter);
app.use(testiRouter);
app.use(coursesRouter);
app.use(courseModelRouter);
app.use(displayVideoRouter);
app.use(adminRouter);

// Database Connection
mongoose.connect(
    "mongodb+srv://EaseE:learning@coursemanagementsystem.0e6ivsq.mongodb.net/EaseE?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
);

// Checking if server is running properly
app.listen(3001,()=>{
    console.log("OUR SERVER IS RUNNING!!");
});