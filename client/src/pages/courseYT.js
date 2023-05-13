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
            .post("https://easee-learning.onrender.com/moduleYt", { courseId: params.ytcourse })
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
            <div className="main">
                <div className="right">
                    <div className="videos">
                        <iframe title="video" src={video} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    
                    <hr className="videoHr"/>

                    {ytCourse.map((info, index) => {
                        return (
                            <div className="instructor" key={index}>
                                <div style={{ width: "50%" }} >

                                    <img
                                        src={info.instructorDp}
                                        style={{ width: "10vw", height: "10vw" }}
                                        alt={info.instructor}
                                    />

                                </div>
                                <div className="instructor-info">
                                    <h2>{info.instructorInfo}</h2>
                                    
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
                                        <ul key={index}>
                                            <li onClick={() => {
                                                onClicked(i);
                                                setVideo(i.moduleLink);
                                            }}
                                            >
                                                <p>
                                                    <span> <i className="fa fa-youtube-play" aria-hidden="true"></i> </span>
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

