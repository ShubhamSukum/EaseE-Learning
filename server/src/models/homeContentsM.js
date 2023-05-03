import mongoose from "mongoose";

const homeContentsM=new mongoose.Schema({
    imageURL:{
        type:String,
        required:true,
    },
    compName:{
        type:String,
        required:true,
    }
},{versionKey:false});

export const homeModel=mongoose.model("homecontents",homeContentsM);
