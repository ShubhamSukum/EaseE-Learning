import express from "express";
import cors from "cors";
import {adminModel} from "../models/admin.js";
import bcrypt from "bcrypt";

const app=express();
app.use(express.json());
app.use(cors());

const adminRouter=express.Router();

adminRouter.get("/getAdmin",async(req,res)=>{ 
    try{
        const data=await adminModel.find({});
        res.json(data);
    }catch(err){
        res.json(err);
    }
});

adminRouter.post("/createAdmin",async(req,res)=>{
    try{
        // Checking if user already exist
        const {adminName,adminPassword} = req.body;
        const exist=await adminModel.findOne({adminName});
        if(exist){
            return res.json({message:"Admin is already registered!!"});
        }

        const PasswordHashed=await bcrypt.hash(adminPassword,10);
        const newAdmin=new adminModel({adminName,adminPassword:PasswordHashed});
        await newAdmin.save();

        return res.json({message:"Admin Registered!!"});
    }catch(err){

        console.log(err);
        res.json(err);
    }
})

export {adminRouter};