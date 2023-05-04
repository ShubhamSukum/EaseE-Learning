import mongoose from "mongoose";

const coursesM=mongoose.Schema({
    courseId:{
        type:Number,
        required:true,
    },
    topicName:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    compName:{
        type:String,
        required:true,
    }
},{versionKey:false});

export const coursesModel=mongoose.model("courses",coursesM);