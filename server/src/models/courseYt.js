import mongoose from "mongoose";

const courseYtSchema=mongoose.Schema({
    courseId:{
        type:Number,
        required:true,
    },
    topicName:{
        type:String,
        required:true,
    },
    Module:[{moduleNo:Number,moduleName:String,moduleLink:String}],
    instructor:{    
        type:String,
        required:true
    },
    instructorInfo:{
        type:String,
        required:true
    },
    instructorDp:{
        type:String,
        required:true
    },
    enrolled:{  
        type:Number,
        required:true,
        default:0   // 0 means not entrolled and 1 means enrolled
    }
},{versionKey:false,timestamps:true});

/*
found an error collection name must be small and in plural form 

"courseYt" gave me error and then it automatically created on collection named "courseyts"
user is wrong *** users is correct collection name

BUT for some account it work like for sumit it worked but for me it gave errors
*/ 

export const courseYtModel=mongoose.model("courseyts",courseYtSchema);



/*
"courseId":1
  "topicName":"Introduction to C#"
  "Module":""
  "instructor":""
  "instructorInfo":""
*/


// testing

// simple schema
// const courseYtSchema=mongoose.Schema({
//     courseId:{
//         type:Number,
//         required:true,
//     },
// });

