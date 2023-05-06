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
    },
    courseLink:{
        type:String,
        required:true,
    }
},{versionKey:false, timestamp:true});

export const coursesModel=mongoose.model("courses",coursesM);

/*
Sample data structure

"courseId":3,
"topicName":"Blockchain Technology",
"duration":"4 weeks",
"compName":"Computer Engineering"
*/

/*

*/