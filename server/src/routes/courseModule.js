import express from "express";
import cors from "cors";
import {courseYtModel} from "../models/courseYt.js"

const app=express();
app.use(cors());
app.use(express.json());

const courseModelRouter=express.Router();

// comment 1

courseModelRouter.post("/moduleYt",async(req,res)=>{
    try{
        // console.log("up")    // testing
        const courseId = req.body.courseId;
        const module=await courseYtModel.find({courseId});
        // console.log("middle")
        res.json(module);   
        // console.log("down")
    }catch(err){
        // console.log("err")
        res.json(err);
        // console.log("err")
    }
})

courseModelRouter.post("/createModule",async(req,res)=>{
    try{
        const {courseId,topicName,Module,instructor,instructorInfo,instructorDp,enrolled}=req.body;

        const newModule=new courseYtModel({courseId,topicName,Module,instructor,instructorInfo,instructorDp,enrolled});
        await newModule.save();
        
        res.json({message:"Yt module created!!"});
    }catch(err){
        res.json(err);
    }
});

export {courseModelRouter};


// comment 1

// courseModelRouter.get("/moduleYt",async(req,res)=>{
//     try{
//         // console.log("up")    // testing
//         const module=await courseYtModel.find();
//         // console.log("middle")
//         res.json(module);   
//         // console.log("down")
//     }catch(err){
//         // console.log("err")
//         res.json(err);
//         // console.log("err")
//     }
// })

