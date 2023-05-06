import express from "express";
import cors from "cors";
import { homeModel } from "../models/homeContentsM.js";
import { coursesModel } from "../models/coursesM.js"

const app=express();

app.use(express.json());
app.use(cors());

const homeRouter=express.Router();

homeRouter.get("/categories",async(req,res)=>{
    try{
        const category=await coursesModel.find({});
        res.json(category);
    }catch(err){
        res.json(err);
    }
});

homeRouter.post("/categories",async(req,res)=>{
    const compName=req.body.compName;
    const query=await coursesModel.find({compName});

    try{
        res.json(query);    
    }catch(err){
        res.json(err);
    }
});

export {homeRouter};