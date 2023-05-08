import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const YtCourse=()=>{
    const [ytCourse,setYtCourse]=useState([]);
    const [curModule,setCurModule]=useState([]);

    const params=useParams();
    // console.log(params.ytcourse)

    useEffect(()=>{
        axios.post("http://localhost:3001/displayvideo",{courseId:params.ytcourse}).then((res)=>{
            console.log(res);
            setYtCourse([res.data]);
        }).catch((err)=>{
            console.err(err);
        })
    },[params.ytcourse]);



    return(
        <>
            {/* Video */}
            {/* {
                ytCourse.map((info,index)=>{

                    return(
                        <div key={index} >
                                <p>Topic Name == {info.topicName}</p> 
                                <p>Instructor Name == {info.instructor}</p>
                                <p>Instructor Info == {info.instructorInfo}</p>
                                <img src={info.instructorDp} style={{width:"10vw",height:"10vw"}}/>
                                <p>Enrolled == {info.enrolled}</p>
                        </div>
                    )
                })
            } */}

            {/* modules */}

            {
                ytCourse.map((info,index)=>{

                    return(
                        <>
                        {
                            info.Module.map((i,index)=>{
                                return(<>
                                    <div className="sad">
                                        
                                    </div>
                                </>)
                                })
                        }
                            

                            <div key={index}>
                                {
                                    info.Module.map((i,index)=>{
                                        return(
                                            <div key={index} style={{marginTop:"10vh"}}>
                                                <h5>Module No == {i.moduleNo}</h5>
                                                <h5>Module Name == {i.moduleName}</h5>
                                                <h5>Module Link == {i.moduleLink}</h5>
                                                <iframe width={"420"} height={"345"} src={i.moduleLink} key={index}></iframe>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }

            
        </>
    )
};
