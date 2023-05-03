import express from "express";
import cors from "cors";
import { testiModel } from "../models/testimonialsM.js";

const app=express();

app.use(express.json());
app.use(cors());

const testiRouter=express.Router();

testiRouter.get("/getTesti",async(req,res)=>{
    try{
        const testDetails=await testiModel.find({});
        res.json(testDetails);
    }catch(err){
        res.json(err);
    }
});

export {testiRouter};