import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios"
import {useCookies} from "react-cookie"
 
export const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setpassword]=useState("");

    const [,setCookies] = useCookies(["access_token"]);

    const navigate=useNavigate();

    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/login",{username,password}).then((res)=>{
                // console.log(res.data)
                // console.log(res.status)

                if(res.data.message==="success"){
                    setCookies("access_token",res.data.token);
                    window.localStorage.setItem("userID",res.data.userId);
                    navigate("/");
                }else{
                    alert(res.data.message);
                }
            })
        }catch(err){
            console.error(err);
        }
    };

    return(
        <div className="center">
        <div className="SignUp" id="Login">
            <form onSubmit={onSubmit}>
                <h2 style={{marginBottom:"5vh"}}>Login</h2> 

                <div className="form-group">
                    {/* <label htmlFor="Username">Username</label> */}
                    <input type="text" placeholder="Enter Username" 
                    value={username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="password" placeholder="Enter Password" 
                    value={password} onChange={(event)=>setpassword(event.target.value)}/>
                </div>

                <button type="submit" id="signUP-Button">Login</button>
                <br/>

                <p className="Login-direct" style={{marginTop:"5vh"}} >Don't have an account: </p>
                <Link to="/signup" className="Login-direct">Sign Up</Link>
            </form>
        </div>
        </div>
    )    
};