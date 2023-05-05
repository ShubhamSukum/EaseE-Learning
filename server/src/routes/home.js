import express from "express";
import cors from "cors";
import { homeModel } from "../models/homeContentsM.js";

const app=express();

app.use(express.json());
app.use(cors());

const homeRouter=express.Router();

homeRouter.get("/categories",async(req,res)=>{
    try{
        const category=await homeModel.find({});
        res.json(category);
    }catch(err){
        res.json(err);
    }
});

export {homeRouter};