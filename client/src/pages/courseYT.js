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
                        <p>{info.topicName}</p>

                            {
                                info.Module.map((i,index)=>{
                                    return(
                                        <div key={index}>
                                            <h5>{i.moduleNo}</h5>
                                            <h5>{i.moduleName}</h5>
                                            <h5>{i.moduleLink}</h5>
                                        </div>
                                    )
                                })
                            }
                            
                        <p>{info.instructor}</p>
                        <p>{info.instructorInfo}</p>
                        <p>{info.enrolled}</p>
                    </div>)
            })
        }
    </div>)
}

