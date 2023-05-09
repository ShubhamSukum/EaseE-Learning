// import axios from "axios";
// import { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";

// export const YtCourse=()=>{
//     const [ytCourse,setYtCourse]=useState([]);
//     // const [curModule,setCurModule]=useState([]);
//     const [clicked,onClicked]=useState([]);
//     const [video,setVideo]=useState("");

//     const params=useParams();
//     // console.log(params.ytcourse) 

//     useEffect(()=>{
//         axios.post("http://localhost:3001/moduleYt",{courseId:params.ytcourse}).then((res)=>{
//             // console.log(res);
//             setYtCourse(res.data);  
//         }).catch((err)=>{
//             console.err(err);
//         })
//     },[params.ytcourse]);

//     useEffect(()=>{
//         axios.post("http://localhost:3001/displayvideo",{courseId:params.ytcourse,moduleNo:clicked.moduleNo})
//         .then((res)=>{
//             setVideo(res.data);
//         }).catch((err)=>{
//             console.log(err);
//         })
//     },[]);

//     // setVideo(()=>{
//     //     axios.post("http://localhost:3001/displayvideo",{courseId:params.ytcourse,moduleNo:clicked["moduleNo"]})
//     //     .then((res)=>{
//     //         setVideo([res.data]);

//     //     }).catch((err)=>{
//     //         console.log(err);
//     //     })
//     // });


//     // useEffect(()=>{
//     //     axios.post("http://localhost:3001/displayvideo",{courseId:params.ytcourse,moduleNo})
//     // },[params.ytcourse,moduleNo]);



//     return(

//         <>
//         <div>{}</div>
//             {
//                 ytCourse.map((info,index)=>{

//                     return(

//                         <div key={index} >
//                                 <p>Topic Name == {info.topicName}</p> 
//                                 {/* <p>Instructor Name == {info.instructor}</p>
//                                 <p>Instructor Info == {info.instructorInfo}</p> */}
//                                 <img src={info.instructorDp} style={{width:"10vw",height:"10vw"}}/>
//                                 {/* <p>Enrolled == {info.enrolled}</p> */}

//                         </div>
//                     )
//                 })
//             }

//             {/* modules */}




//             {
//                 ytCourse.map((info,index)=>{

//                     return(
//                         <div key={index}>
//                         {/* {
//                             info.Module.map((i,index)=>{
//                                 return(<>
//                                     <div className="sad">

//                                     </div>
//                                 </>)
//                                 })
//                         } */}


//                             <div key={index}>
//                                 {


//                                     info.Module.map((i,index)=>{
//                                         // const clicked=(link)=>{
//                                         //     try{
//                                         //         onClicked(link);
//                                         //         console.log(link)
//                                         //     }catch(err){
//                                         //         console.log(err);
//                                         //     }

//                                         // }

//                                         // const funClick=async()=>{
//                                         //     await setModu(i.moduleNo);
//                                         // }

//                                         return(
//                                             <div
//                                                 key={index}
//                                                 style={{ marginTop: "10vh", border: "1px solid black",cursor:"pointer"}}
//                                                 onClick={() => {
//                                                     // setModu(i.moduleNo);
//                                                     onClicked(i);
//                                                     console.log(clicked.moduleNo);
//                                                     console.log(clicked.moduleLink);

//                                                     // console.log(clicked);
//                                                     // console.log(modu);
//                                                 }}
//                                             >
//                                                 <h2>Topic Name ** {info.topicName}</h2>
//                                                 <h5>Module No == {i.moduleNo}</h5>
//                                                 <h5>Module Name == {i.moduleName}</h5>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>

//                         </div>
//                     )
//                 })
//             }


//         </>
//     )
// };

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const YtCourse = () => {
    const [ytCourse, setYtCourse] = useState([]);
    const [, onClicked] = useState({});
    const [video, setVideo] = useState("");

    const params = useParams();

    useEffect(() => {
        axios
            .post("http://localhost:3001/moduleYt", { courseId: params.ytcourse })
            .then((res) => {
                setYtCourse(res.data);
                setVideo(res?.data[0]?.Module[0]?.moduleLink);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [params.ytcourse]);

    //   useEffect(() => {
    //     if (clicked.moduleNo) {
    //       axios
    //         .post("http://localhost:3001/displayvideo", {
    //           courseId: params.ytcourse,
    //           moduleNo: clicked.moduleNo,
    //         })
    //         .then((res) => {
    //           setVideo(res.data);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //   }, [clicked.moduleNo, params.ytcourse]);

    return (
        <>
            <div class="main">
                <div class="right">
                    <div class="videos">
                        <iframe title="video" src={video} frameborder="0" allowfullscreen></iframe>
                    </div>
                    
                    <hr className="videoHr"/>

                    {ytCourse.map((info, index) => {
                        return (
                            <div class="instructor">
                                <div style={{ width: "50%" }} key={index}>

                                    <img
                                        src={info.instructorDp}
                                        style={{ width: "10vw", height: "10vw" }}
                                        alt={info.instructor}
                                    />

                                </div>
                                <div class="instructor-info">
                                    <h2>{info.topicName}</h2>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="left" >
                    <h1>  {ytCourse[0]?.topicName}</h1>
                    <div className="modulie">
                        {ytCourse.map((info, index) => {
                            return (
                                info.Module.map((i, index) => {
                                    return (
                                        <ul>
                                            <li onClick={() => {
                                                onClicked(i);
                                                setVideo(i.moduleLink);
                                            }}
                                            >
                                                <p>
                                                    <span> <i class="fa fa-youtube-play" aria-hidden="true"></i> </span>
                                                    {i.moduleNo}. {i.moduleName}
                                                </p>
                                            </li>
                                            <hr />
                                        </ul>
                                    );
                                })
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

