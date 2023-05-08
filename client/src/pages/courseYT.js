import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const YtCourse=()=>{
    const [ytCourse,setYtCourse]=useState([]);
    const params=useParams();
    // console.log(params.ytcourse)

    useEffect(()=>{
        axios.post("http://localhost:3001/moduleYt",{courseId:params.ytcourse}).then((res)=>{
            setYtCourse(res.data);
        }).catch((err)=>{
            console.err(err);
        })
    },[params.ytcourse]);

    return(<div>
        {
            ytCourse.map((info,index)=>{
                return(
                    <div key={index}>
                        <p>Topic Name == {info.topicName}</p>

                            {
                                info.Module.map((i,index)=>{
                                    return(
                                        <div key={index}>
                                            <h5>Module No == {i.moduleNo}</h5>
                                            <h5>Module Name == {i.moduleName}</h5>
                                            <h5>Module Link == {i.moduleLink}</h5>
                                        </div>
                                    )
                                })
                            }
                            
                        <p>Instructor Name == {info.instructor}</p>
                        <p>Instructor Info == {info.instructorInfo}</p>
                        <p>Enrolled == {info.enrolled}</p>
                    </div>)
            })
        }
    </div>)
}

