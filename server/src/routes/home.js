import express from "express";
import cors from "cors";
import { homeModel } from "../models/homeContentsM.js";
import { coursesModel } from "../models/coursesM.js"

const app=express();

app.use(express.json());
app.use(cors());

const homeRouter=express.Router();

// get all category
homeRouter.get("/courseCategories",async(req,res)=>{
    try{
        const category=await homeModel.find({});
        res.json(category);
    }catch(err){
        res.json(err);
    }
});

// button click specify category
homeRouter.post("/categories",async(req,res)=>{
    const compName=req.body.compName;
    const query=await coursesModel.find({compName});

    try{
        res.json(query);    
    }catch(err){
        res.json(err);
    }
});

// creating a category

homeRouter.post("/createCategory",async(req,res)=>{
    
    try{
        const {imageURL,compName}=req.body;
        const fCompName=await homeModel.findOne({compName});
        
        if(fCompName){
            return res.json({message:"Category Already exist by this title !!"});
        }

        const newCat= new homeModel({imageURL,compName});
        await newCat.save();

        res.json({message:"Category added!!"});

    }catch(err){
        console.log(err);
        res.json(err);
    }
})

export {homeRouter};