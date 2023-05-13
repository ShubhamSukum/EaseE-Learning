import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";


export const Courses = () => {
    const params = useParams();
    // console.log(params.compName);

    const [courseList, allCourseList] = useState([]);
    

    useEffect(() => {
        Axios.post("https://easee-learning.onrender.com/categories", { compName: params.compName }).then((res) => {
            allCourseList(res.data);
            // console.log(res);
        }).catch((err) => {
            console.log(err)
        });
    }, [params.compName]);

    return (
        <div>
            {/* {params.compName}#87CEEB */}
            <section style={{ background: "#f5f5f5", paddingTop: "30px", paddingBottom: "5px" }}>
                <h1 className="cat">List of Courses</h1>
                <center><hr className="hr" /></center>
                <div className="category">
                    {
                        courseList.map((data, index) => {
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