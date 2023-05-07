import mongoose from "mongoose";

// Creating a structure (SCHEMA) that we are using for signup
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPass:{
        type:String,
    },
    college:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    }
},{versionKey:false, timestamps:true});

export const userModel=mongoose.model("users",userSchema);

// name  username password  confirmPass  college  mobile

/*
{
  "name":"Shubham",
  "username":"shubz0",
  "password":"hashed",
  "college":"PICT",
  "mobile":9876543210
}
*/