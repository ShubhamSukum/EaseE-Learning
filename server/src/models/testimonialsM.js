import mongoose from "mongoose";

const testimonialsM=new mongoose.Schema({
    judge:{
        type:String,
        required:true,
    },
    words:{
        type:String,
        required:true,
    }
},{versionKey:false});

export const testiModel=mongoose.model("testimonials",testimonialsM);