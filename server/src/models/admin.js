import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },
    adminPassword:{
        type:String,
        required:true
    }
},{versionKey:false,timestamps:true});

export const adminModel=mongoose.model("admins",adminSchema);