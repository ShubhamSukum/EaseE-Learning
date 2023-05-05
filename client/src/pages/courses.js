import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";

export const Courses=()=>{
    const params = useParams();
    console.log(params.compName);

    // if(params.compName==="undefined"){
    //     useEffect(()=>{
    //         Axios.get("http://localhost:3001/categories").then((res)=>{
    //             allCourseList(res.data);
    //             console.log(res);
    //         }).catch((err)=>{       
    //             console.log(err)
    //         });
    //     },[]);
    // }

    const [courseList,allCourseList]=useState([]);

    useEffect(()=>{
        Axios.post("http://localhost:3001/categories",{compName:params.compName}).then((res)=>{
            allCourseList(res.data);
            // console.log(res);
        }).catch((err)=>{       
            console.log(err)
        });
    },[params.compName]);

    

    return(
        <div>
            {/* {params.compName}#87CEEB */}

            {
                courseList.map((data,index)=>{
                    return(
                        <div style={{margin:"10px"}} key={index}>
                            <h2>courseId = {data.courseId}</h2>
                            <h2>topicName = {data.topicName}</h2>
                            <h2>compName = {data.compName}</h2>
                            <h2>duration ={data.duration}</h2>
                            <button style={{backgroundColor:"rgb(0,191,255)"}} className="logout-btn">ENROLL</button>
                        </div>
                    )
                })
            }    
        </div>
    ) 
};

/*
    SYNTAX

    import { useState, useEffect } from 'react';
    import axios from 'axios';

    function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post('/api/mydata', { key: 'value' })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        
    );
    }
*/