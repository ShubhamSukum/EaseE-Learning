import axios from "axios";
import { useState,useEffect } from "react";

export const AllCourses=()=>{
    const [listCourses,setListOfCourses]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/courses").then((res)=>{
            setListOfCourses(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    })

    return(<div>
        {/* 31 111 53 */}
            <section style={{ background: "#f5f5f5", paddingTop: "30px", paddingBottom: "5px" }}>
                <h1 className="cat">List of All Courses</h1>
                <center><hr className="hr" /></center>
                <div className="category">
                    {
                        listCourses.map((data, index) => {
                            return (
                                <div key={index} className="category-content">
                                    {/* <h2>courseId = {data.courseId}</h2> */}
                                    <img src={data.courseLink} alt={data.topicName + " image"} />
                                    <h2>{data.topicName}</h2>
                                    {/* <p>{data.compName}</p> */}
                                    <p>Duration: {data.duration}</p>
                                    <button >View Course</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>)
}
