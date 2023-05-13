import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AddCourse=()=>{
    const [courseId,setCourseId]=useState("");
    const [topicName,setTopicName]=useState("");
    const [duration,setDuration]=useState("");
    const [compName,setCompName]=useState("");
    const [courseLink,setCourseLink]=useState("");

    const ref=useRef(null);
    // const navigate=useNavigate();

    useEffect(()=>{
        if(ref.current){
            ref.current?.focus();
        }
    },[ref])

    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://easee-learning.onrender.com/createCourse",{
            courseId,
            topicName,
            duration,
            compName,
            courseLink})
        .then((res)=>{
                alert(res.data.message);
                // navigate("/allcourses");
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
    <>
        <div className="center" id="admin-panel">
            <h1>Add Course</h1>

            <form onSubmit={onSubmit}>

                <input type="Number" placeholder="Enter courseId" ref={ref}
                onChange={(e)=>{setCourseId(e.target.value)}} required/>

                <input type="text" placeholder="Enter Topic Name"
                onChange={(e)=>{setTopicName(e.target.value)}} required/>

                <input type="text" placeholder="Enter Duration (in Weeks)"
                onChange={(e)=>{setDuration(e.target.value)}} required/>

                <input type="text" placeholder="Enter Category Name"
                onChange={(e)=>{setCompName(e.target.value)}} required/>
        
                <input type="text" placeholder="Thumbnail Link"
                onChange={(e)=>{setCourseLink(e.target.value)}} required/>

                <button type="submit" id="signUP-Button">Add</button>

                <br />
            </form>

        </div>  
    </>
    )
};

// courseId,topicName,duration,compName,courseLink
/*
{
    "courseId": 7,
    "topicName": "Introduction to Ruby",
    "duration": "8 weeks",
    "compName": "Computer Engineering",
    "courseLink": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png"
}
*/
