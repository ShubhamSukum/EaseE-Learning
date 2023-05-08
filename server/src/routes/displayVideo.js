import express from "express";
import cors from "cors";

import { courseYtModel } from "../models/courseYt.js";

const app=express();
app.use(cors());
app.use(express.json());

const displayVideoRouter=express.Router();

displayVideoRouter.post("/displayvideo",async(req, res)=>{
    // console.log(req.body);
    const courseId=req.body.courseId;
    const moduleNo=req.body.moduleNo;
    
    try{
        // console.log("try")
        const value=await courseYtModel.findOne({courseId});
        // console.log("try finished")
        res.json(value.Module.map((data)=>{
             if(moduleNo===data.moduleNo){return data.moduleLink}
        }));
        // console.log(value.Module)
    }catch(err){
        res.json(err);
    }
})

export {displayVideoRouter};

