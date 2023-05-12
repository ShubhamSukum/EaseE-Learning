import express from "express";
import cors from "cors";
import {adminKeysModel} from "../models/adminKeys.js"

const app=express();

app.use(express.json());
app.use(cors());

const adminKeyRouter=express.Router();

adminKeyRouter.post("/getKeys",async(req,res)=>{
    try{
        const {key}=req.body;
        const found=await adminKeysModel.findOne({key});

        if(found){
            res.json({message:"Verified!!",valid:"ok"});
        }else{
            res.json({message:"Authorization revoked!!",valid:"notOk"});
        }
    }
    catch(err){
        res.json(err);
    }
}); 

export {adminKeyRouter};
