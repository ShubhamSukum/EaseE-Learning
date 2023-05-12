import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AdminPanel=()=>{

    const [vKey,setVKey]=useState("");

    const onSubmit=async(e)=>{
        e.preventDefault();
        console.log(vKey);
        // await axios.post("http://localhost:3001/getKeys")  


    };
    

    return(
        <>
            <div className="center">

            <h1>Verfication</h1>
                <i className="fa fa-user-circle" aria-hidden="true" style={{ paddingBottom: "15px", fontSize: "40px" }}></i>

                <form onSubmit={onSubmit}>
                    <input type="password" placeholder="Enter Verfication Code" 
                    onChange={(e)=>{setVKey(e.target.value)}}/>

                    <button type="submit" id="signUP-Button">Verify</button>
                </form>

            </div>
        </>
    )
}