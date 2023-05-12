import mongoose from "mongoose";

const adminKeysSchema= new mongoose.Schema({
    key:{
        type:Number,
        unique:true,
        required:true
    }
},{versionKey:false,timestamps:true});

export const adminKeysModel= mongoose.model("adminkeys",adminKeysSchema);