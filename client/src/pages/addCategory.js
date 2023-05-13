import {useState,useEffect,useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AddCategory=()=>{
    const [compName,setCompName]=useState([]);
    const [link,setLink] =useState([]);

    const ref=useRef(null);

    const navigate=useNavigate();

    useEffect(()=>{
        if(ref.current){
            ref.current?.focus();
        }
    },[ref]);

    const onSubmit=(e)=>{
        e.preventDefault();

        axios.post("https://easee-learning.onrender.com/createCategory",{imageURL:link,compName:compName})
        .then((res)=>{
            alert(res.data.message);
            navigate("/");
        }).catch((err)=>{
            console.log(err);
        }); 
    }

    return(
    <>
        <div className="center" id="admin-panel">
            <h1>Add Category</h1>

            <form onSubmit={onSubmit}>

                <input type="text" placeholder="Enter Category Name" ref={ref}
                onChange={(e)=>{setCompName(e.target.value)}}/>

                <input type="text" placeholder="Link of Category Thumbnail"
                onChange={(e)=>{setLink(e.target.value)}}/>

                <button type="submit" id="signUP-Button">Add</button>

                <br />
            </form>

        </div>
        
    </>)
};

// https://www.aranca.com/assets/uploads/blogs/newcatgban2.jpg