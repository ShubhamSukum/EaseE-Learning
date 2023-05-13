import axios from "axios";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";

export const AllCourses=()=>{
    const [listCourses,setListOfCourses]=useState([]);
    // const [courseId,setCourseId]=useState(0);

    useEffect(()=>{
        axios.get("https://easee-learning.onrender.com/courses").then((res)=>{
            setListOfCourses(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    })

    // const butClick=async(courseId)=>{
    //     console.log("ashdbss")
    //     try{
    //         await axios.post("http://localhost:3001/moduleYt",{courseId}).then((res)=>{
    //             console.log(res);
                
    //         }).catch((err)=>{
    //             console.log(err);
    //         })
    //     }catch(err){
    //         console.log(err)
    //     }
    // };

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
                                    <Link to={"/ytcoursemodule/"+ data.courseId }>
                                        <button > 
                                            {/* onClick={(e)=>{butClick(data.courseId)}} */}
                                        View Course
                                        </button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>)
}
