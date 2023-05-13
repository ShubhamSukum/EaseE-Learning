import {useRef, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AdminVerification=()=>{

    const [vKey,setVKey]=useState("");
    const navigate=useNavigate();
    const ref=useRef(null);

    useEffect(()=>{
        if(ref.current){
            ref.current?.focus()
        }
    },[ref]);    

    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(vKey);
        axios.post("https://easee-learning.onrender.com/getKeys",{key:vKey}).then((res)=>{
            // console.log(res);
            if(res.data.valid==="ok")
            {
                alert(res.data.message)
                navigate("/adminPanel");
            }else{
                alert(res.data.message);
                navigate("/");
            }
        }).catch((err)=>{
                console.log(err);
        })
    };  
    
        return(
        <>
            <div className="center" id="verify">

                <h1>Verfication</h1>
                
                <i className="fa fa-user-circle" aria-hidden="true" 
                style={{ paddingBottom: "15px", fontSize: "40px" }}></i>

                <form onSubmit={onSubmit}>
                        <input type="password" ref={ref} placeholder="Enter Verfication Code" 
                        onChange={(e)=>{setVKey(e.target.value)}}/>

                    <button type="submit" id="signUP-Button">Verify</button>
                </form>

            </div>
        </>
    )
};