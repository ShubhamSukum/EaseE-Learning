import express from "express";
import cors from "cors";
import {coursesModel} from "../models/coursesM.js";

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

export {coursesRouter};


