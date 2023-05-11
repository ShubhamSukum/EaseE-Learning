import express from "express";
import cors from "cors";
import {coursesModel} from "../models/coursesM.js";
import {homeModel} from "../models/homeContentsM.js"

const app=express();

app.use(express.json());
app.use(cors());

const coursesRouter=express.Router();

coursesRouter.get("/courses",async(req,res)=>{
    try{
        const tab=await coursesModel.find({});
        // console.log(tab);
        res.json(tab);
    }catch(err){
        res.json(err);
        console.log(err);
    }
});

coursesRouter.post("/createCourse",async(req,res)=>{
    try{
        const {courseId,topicName,duration,compName,courseLink}=req.body;
        const fCompName=await homeModel.findOne({compName});

        if(!fCompName){
            return res.json({message:"Category for this course doesn't exist create one or Check SPELLING and spacing"});
        }

        // Checking if there exist 
        const fId=await coursesModel.findOne({courseId});

        if(fId){
            return res.json({message:"This CourseId is Taken !!"})
        }

        const storecourse=new coursesModel({courseId,topicName,duration,compName,courseLink});
        await storecourse.save();

        res.json({message:"Course Added!!"})

    }catch(err){
        res.json(err);
    }
})

export {coursesRouter};


/*

{
  "courseId": 7,
  "topicName": "Computer New Course",
  "duration": "9 weeks",
  "compName": "Computer Engineering",
  "courseLink": "https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Freport%2Fwp-content%2Fuploads%2F2021%2F09%2Fcoursera-top-courses.png?auto=format&h=300&ixlib=php-4.1.0&s=2f4f19242496044cb51b0b447ba8ae74"
}

*/