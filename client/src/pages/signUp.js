import {useState} from "react";
import {Link} from "react-router-dom";

export const SignUp=()=>{
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setpassword]=useState("");
    const [confirmPass,setconfirmPass]=useState("");
    const [college,setcollege]=useState("");
    const [mobile,setmobile]=useState("");

    return(
        <div className="center">
        <div className="SignUp">
            <form>
                <h2>Sign UP</h2>
                <div className="form-group">
                    {/* <label htmlFor="Name">Name</label> */}
                    <input type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Username">Username</label> */}
                    <input type="text" placeholder="Enter Username" onChange={(event)=>setUsername(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="password" placeholder="Enter Password" onChange={(event)=>setpassword(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Confirm Password">Confirm Password</label> */}
                    <input type="text" placeholder="Confirm Password" onChange={(event)=>setconfirmPass(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="College">College</label> */}
                    <input type="text" placeholder="Enter College" onChange={(event)=>setcollege(event.target.value)}/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Mobile">Mobile Number</label> */}
                    <input type="text" placeholder="Enter Mobile Number" onChange={(event)=>setmobile(event.target.value)}/>
                </div>

                <button type="submit" id="signUP-Button">Sign Up</button>
                <br/>
                <p className="Login-direct">Already Have an Account: </p>
                <Link to="/login" className="Login-direct">Login</Link>
            </form>
        </div>
        </div>
    )    
};

/*
//     return(
//     <div>
//         <SignUp/>
//     </div>  
// )
*/

// const SignUp=()=>{
//     const [name,setName]=useState("");
//     const [username,setUsername]=useState("");
//     const [password,setpassword]=useState("");
//     const [confirmPass,setconfirmPass]=useState("");
//     const [college,setcollege]=useState("");
//     const [mobile,setmobile]=useState("");

//     return(
//         <div className="center">
//         <div className="SignUp">
//             <form>
//                 <h2>Sign UP</h2>
//                 <div className="form-group">
//                     {/* <label htmlFor="Name">Name</label> */}
//                     <input type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
//                 </div>

//                 <div className="form-group">
//                     {/* <label htmlFor="Username">Username</label> */}
//                     <input type="text" placeholder="Enter Username" onChange={(event)=>setUsername(event.target.value)}/>
//                 </div>

//                 <div className="form-group">
//                     {/* <label htmlFor="Password">Password</label> */}
//                     <input type="password" placeholder="Enter Password" onChange={(event)=>setpassword(event.target.value)}/>
//                 </div>

//                 <div className="form-group">
//                     {/* <label htmlFor="Confirm Password">Confirm Password</label> */}
//                     <input type="text" placeholder="Confirm Password" onChange={(event)=>setconfirmPass(event.target.value)}/>
//                 </div>

//                 <div className="form-group">
//                     {/* <label htmlFor="College">College</label> */}
//                     <input type="text" placeholder="Enter College" onChange={(event)=>setcollege(event.target.value)}/>
//                 </div>

//                 <div className="form-group">
//                     {/* <label htmlFor="Mobile">Mobile Number</label> */}
//                     <input type="text" placeholder="Enter Mobile Number" onChange={(event)=>setmobile(event.target.value)}/>
//                 </div>

//                 <button type="submit" id="signUP-Button">Sign Up</button>
//                 <br/>
//                 <p className="Login-direct">Already Have an Account: </p>
//                 <Link to="/courses" className="Login-direct">Login</Link>
//             </form>
//         </div>
//         </div>
//     )
// };