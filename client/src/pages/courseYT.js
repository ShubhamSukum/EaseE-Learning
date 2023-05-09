import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const YtCourse=()=>{
    const [ytCourse,setYtCourse]=useState([]);
    // const [curModule,setCurModule]=useState([]);
    const [clicked,onClicked]=useState([]);
    const [modu,setModu]=useState([]);

    const params=useParams();
    // console.log(params.ytcourse)

    useEffect(()=>{
        axios.post("http://localhost:3001/moduleYt",{courseId:params.ytcourse}).then((res)=>{
            // console.log(res);
            setYtCourse(res.data);  
        }).catch((err)=>{
            console.err(err);
        })
    },[params.ytcourse]);

    // useEffect(()=>{
    //     axios.post("http://localhost:3001/displayvideo",{courseId:params.ytcourse,moduleNo})
    // },[params.ytcourse,moduleNo]);



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
                        <div key={index}>
                        {/* {
                            info.Module.map((i,index)=>{
                                return(<>
                                    <div className="sad">
                                        
                                    </div>
                                </>)
                                })
                        } */}
                            

                            <div key={index}>
                                {
                                    info.Module.map((i,index)=>{
                                        // const clicked=(link)=>{
                                        //     try{
                                        //         onClicked(link);
                                        //         console.log(link)
                                        //     }catch(err){
                                        //         console.log(err);
                                        //     }
                                            
                                        // }

                                        // const funClick=async()=>{
                                        //     await setModu(i.moduleNo);
                                        // }

                                        return(
                                            <div
                                                key={index}
                                                style={{ marginTop: "10vh", border: "1px solid black",cursor:"pointer"}}
                                                onClick={() => {
                                                    setModu(i.moduleNo);
                                                    onClicked(i.moduleLink);
                                                    
                                                    console.log(clicked);
                                                    console.log(modu)
                                                }}
                                            >
                                                <h2>Topic Name ** {info.topicName}</h2>
                                                <h5>Module No == {i.moduleNo}</h5>
                                                <h5>Module Name == {i.moduleName}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                })
            }

            
        </>
    )
};
