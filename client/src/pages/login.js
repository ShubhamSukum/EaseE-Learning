import {useState} from "react";
import {Link} from "react-router-dom";

export const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setpassword]=useState("");

    return(
        <div className="center">
        <div className="SignUp" id="Login">
            <form>
                <h2 style={{marginBottom:"5vh"}}>Login</h2> 

                <div className="form-group">
                    {/* <label htmlFor="Username">Username</label> */}
                    <input type="text" placeholder="Enter Username" onChange={(event)=>setUsername(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="password" placeholder="Enter Password" onChange={(event)=>setpassword(event.target.value)}/>
                </div>

                <button type="submit" id="signUP-Button">Login</button>
                <br/>

                <p className="Login-direct" style={{marginTop:"5vh"}} >Don't have an account: </p>
                <Link to="/signUp" className="Login-direct">Sign Up</Link>
            </form>
        </div>
        </div>
    )    
};