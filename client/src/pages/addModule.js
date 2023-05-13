import axios from "axios";
import { useEffect, useState ,useRef} from "react";

export const AddModule=()=>{
    const [courseId,setCourseId] = useState("");
    const [topicName,setTopicName] = useState("");

    const [module,setModule]=useState([]);
    const [moduleNo,setModuleNo]=useState("");
    const [moduleName,setModuleName]=useState("");
    const [moduleLink,setModuleLink]=useState("");

    const [instructor,setInstructor] = useState("");
    const [instructorInfo,setInstructorInfo] = useState("");
    const [instructorDp,setInstructorDp] = useState("");

    const ref=useRef();

    const onSubmit=(e)=>{
        e.preventDefault();
            axios.post("https://easee-learning.onrender.com/createModule",
            {courseId,topicName,Module:module,instructor,instructorInfo,instructorDp})
            .then((res)=>{
                alert(res.data.message);
            }).catch((err)=>{
                console.log(err);
            })

        // console.log(courseId);
        // console.log(topicName);
        // console.log(module);
        // console.log(instructor);
        // console.log(instructorInfo);
        // console.log(instructorDp);
    }

    // comment 1

    const onSub = (e) => {
        e.preventDefault();
        const newModule = { moduleNo, moduleName, moduleLink };
        setModule((prev)=>{
            return [
                    ...prev,
                    newModule
                ]
        });
        setModuleNo("");
        setModuleName("");
        setModuleLink("");
        // console.log(module);
    };

    useEffect(()=>{
        if(ref.current){
            ref.current?.focus();
        }
    },[ref])

    return(
    <>  

        <div className="center" id="admin-panel">
            <h1>Add Module</h1>

            <form onSubmit={onSubmit}>

                <input type="Number" placeholder="Enter courseId" ref={ref}
                onChange={(e)=>{setCourseId(e.target.value)}} required/>

                <input type="text" placeholder="Enter Topic Name"
                onChange={(e)=>{setTopicName(e.target.value)}} required/>

                <input type="text" placeholder="Enter Instructor Name"
                onChange={(e)=>{setInstructor(e.target.value)}} required/>

                <input type="text" placeholder="Enter Instructor Info"
                onChange={(e)=>{setInstructorInfo(e.target.value)}} required/>
        
                <input type="text" placeholder="Instructor Profile Picture Link"
                onChange={(e)=>{setInstructorDp(e.target.value)}} required/>

                <button type="submit" id="signUP-Button">Add</button>

                <br />
            </form>
        </div> 

        <form 
            onSubmit={onSub} 
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
            id="admin-panel"
        >

                <input type="Number" placeholder="Add Module No" value={moduleNo}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                onChange={(e)=>{setModuleNo(e.target.value)}} required/>

                <input type="text" placeholder="Add Module Name" value={moduleName}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                onChange={(e)=>{setModuleName(e.target.value)}} required/>
        
                <input type="text" placeholder="Add Module Link" value={moduleLink}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                onChange={(e)=>{setModuleLink(e.target.value)}} required/> 

                <button type="submit" id="signUP-Button">Add Sub Modules</button>
                  
        </form>

    </>
    )
};

/*
Sample data

http://localhost:3001/createModule

Data

{
  "courseId": 8,
  "topicName": "Php is minutes",
  "Module": [
    {
      "moduleNo": 1,
      "moduleName": "Getting Started with PHP",
      "moduleLink": "https://www.youtube.com/embed/jGD0vn-QIkg"
    },
    {
      "moduleNo": 2,
      "moduleName": "Variables and Data Types",
      "moduleLink": "https://www.youtube.com/embed/ZRvcYkz9m70"
    },
    {
      "moduleNo": 3,
      "moduleName": "Control Statements",
      "moduleLink": "https://www.youtube.com/embed/UXeDS20wr60"
    }
  ],
  "instructor": "Shubz",
  "instructorInfo": "Shubz is a web developer with over 2 years of experience.",
  "instructorDp": "https://static.vecteezy.com/system/resources/previews/003/241/285/original/business-instructor-and-tutor-vector.jpg",
  "enrolled": 1
}
*/

