import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [college, setcollege] = useState("");
    const [mobile, setmobile] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3001/signup", { name, username, password, confirmPass, college, mobile })
                .then((res) => {
                    if (res.data.errType === "user") {
                        alert(res.data.message);
                    } else if (res.data.errType === "pass") {
                        alert(res.data.message);
                    } else if (res.data.errType === "mobile") {
                        alert(res.data.message);
                    } else if (res.data.errType === "empty") {
                        alert(res.data.message);
                    }

                    if (res.data.success === "true") {
                        alert(res.data.message);
                    }
                });

            // alert("User created!! Login now!!");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="center">
            <h1>Sign UP</h1>
            <i class="fa fa-user-circle" aria-hidden="true" style={{ paddingBottom: "15px", fontSize: "40px" }}></i>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    {/* <label htmlFor="Name">Name</label> */}
                    <input type="text" placeholder="Enter Name"
                        value={name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Username">Username</label> */}
                    <input type="text" placeholder="Enter Username"
                        value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Password">Password</label> */}
                    <input type="password" placeholder="Enter Password"
                        value={password} onChange={(event) => setpassword(event.target.value)} />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Confirm Password">Confirm Password</label> */}
                    <input type="password" placeholder="Confirm Password"
                        value={confirmPass} onChange={(event) => setconfirmPass(event.target.value)} />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="College">College</label> */}
                    <input type="text" placeholder="Enter College"
                        value={college} onChange={(event) => setcollege(event.target.value)} />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="Mobile">Mobile Number</label> */}
                    <input type="text" placeholder="Enter Mobile Number"
                        value={mobile} onChange={(event) => setmobile(event.target.value)} />
                </div>

                <button type="submit" id="signUP-Button">Sign Up</button>
                <br />
                <p className="Login-direct">Already Have an Account: </p>
                <Link to="/login" className="Login-direct">Login</Link>
            </form>
        </div>
    )
};