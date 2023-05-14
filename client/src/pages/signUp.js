import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [college, setcollege] = useState("");
    const [mobile, setmobile] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();


        try {
            await axios.post("https://easee-learning.onrender.com/signup", { name, username, password, confirmPass, college, mobile })
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
                        navigate("/")
                    }
                });

            // alert("User created!! Login now!!");
        } catch (err) {
            console.error(err);
        }
    };

    function validatePassword() {
        var pass = document.getElementById('password').value;
        var passDiv = document.getElementById('passDiv');
        passDiv.style.display = "block";
        clear();
        if (pass === "") {
            passDiv.style.display = "none";
            document.getElementById("passNumber").style.color = "red";
            document.getElementById("passLetter").style.color = "red";
            document.getElementById("passSpecial").style.color = "red";
            document.getElementById("passLength").style.color = "red";
        }
        test1(pass);
        test2(pass);
        test3(pass);
        test4(pass);

        if (test1(pass) && test2(pass) && test3(pass) && test4(pass)) {
            document.getElementById("cpassError").innerHTML = "Password is Strong";
            document.getElementById("cpassError").style.color = "limegreen";
            document.getElementById("cpassError").style.visibility = "Visible";
            document.getElementById("password").style.borderColor = "2.3px solid black";
            passDiv.classList.add("animate-hide");
            document.getElementById('goUP').classList.add("go-up");
        } else {
            document.getElementById("cpassError").innerHTML = "Password is Week";
            document.getElementById("cpassError").style.color = "red";
            document.getElementById("cpassError").style.visibility = "Visible";
            passDiv.classList.remove("animate-hide");
            document.getElementById('goUP').classList.remove("go-up");
        }
    }

    function confirmPassword() {
        var pass = document.getElementById('password').value;
        var cpass = document.getElementById('cpassword').value;

        if (cpass === "") {
            document.getElementById("cpassError").style.color = "red";
            document.getElementById("cpassError").innerHTML = "Passwords are not matching";
            return false;
        }

        if (pass === cpass) {
            if (test1(cpass) && test2(cpass) && test3(cpass) && test4(cpass)) {
                document.getElementById("password").style.borderBottom = "2.3px solid black";
                document.getElementById("cpassword").style = "border-color: solid black !important";
                document.getElementById("cpassError").innerHTML = "Passwords are matched";
                document.getElementById("cpassError").style.visibility = "Visible";
                document.getElementById("cpassError").style.color = "limegreen";
                return true;
            } else {
                document.getElementById("cpassError").innerHTML =
                    "Password is too Week, follow above instructions to create your password strong";
                document.getElementById("cpassError").style.visibility = "Visible";
                document.getElementById("cpassError").style.color = "red";
                return false;
            }
        } else {
            document.getElementById("cpassword").style.borderBottomColor = "red";
            document.getElementById("cpassError").innerHTML = "Passwords are not matching";
            document.getElementById("cpassError").style.visibility = "Visible";
            document.getElementById("cpassError").style.color = "red";

            return false;
        }
    }

    function test1(pass) {

        if (pass.search(/[0-9]/) === -1) {
            document.getElementById("password").style = "border-color: red !important";
            document.getElementById("passNumber").style.color = "red";
            return false;
        } else {
            document.getElementById("passNumber").style.color = "limegreen";
            document.getElementById("password").style = "border-color: solid black !important";
            return true;
        }
    }

    function test2(pass) {

        if (pass.search(/[A-Z]/) === -1) {
            document.getElementById("password").style = "border-color: red !important";
            document.getElementById("passLetter").style.color = "red";
            return false;
        } else {
            document.getElementById("passLetter").style.color = "limegreen";
            document.getElementById("password").style = "border-color: solid black !important";
            return true;
        }
    }

    function test3(pass) {

        if (pass.search(/[!@#%^&(_+,;:]/) === -1) {
            document.getElementById("password").style = "border-color: red !important";
            document.getElementById("passSpecial").style.color = "red";
            return false;
        } else {
            document.getElementById("passSpecial").style.color = "limegreen";
            document.getElementById("password").style = "border-color: solid black !important";
            return true;
        }
    }

    function test4(pass) {

        if (pass.length < 8) {
            document.getElementById("password").style = "border-color: red !important";
            document.getElementById("passLength").style.color = "red";
            return false;
        } else {
            document.getElementById("passLength").style.color = "limegreen";
            document.getElementById("password").style = "border-color: solid black !important";
            return true;
        }
    }

    function clear() {
        var cpasss = document.getElementById('cpassword');
        cpasss.value = "";
    }

    return (
        <>

            <center id="passDiv" style={{ display: "none" }}>
                <fieldset style={{ width: "95%" }}>
                    <ul style={{ width: "fit-content", margin: "0 auto" }}>

                        <li>
                            <div style={{ textAlign: "left" }} id="passNumber">Password should contain at-least 1 number</div>
                        </li>
                        <li>
                            <div style={{ textAlign: "left" }} id="passLetter">Password should contain at-least one uppercase letter
                            </div>
                        </li>
                        <li>
                            <div style={{ textAlign: "left" }} id="passSpecial">Password should contain at-least 1 special character
                            </div>
                        </li>
                        <li>
                            <div style={{ textAlign: "left" }} id="passLength">Length of password should be minimum 8 characters
                            </div>
                        </li>

                    </ul>
                </fieldset>
            </center>

            <div className="center" id="goUP">
                <h1>Sign UP</h1>
                <i className="fa fa-user-circle" aria-hidden="true" 
                style={{ paddingBottom: "15px", fontSize: "40px", paddingLeft:"133px"}}></i>
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
                        <input type="password" placeholder="Enter Password" name="password" id="password"
                            value={password} onKeyUp={validatePassword} onChange={(event) => setpassword(event.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="Confirm Password">Confirm Password</label> */}
                        <input type="password" placeholder="Confirm Password" name="cpassword" id="cpassword"
                            value={confirmPass} onKeyUp={confirmPassword} onChange={(event) => setconfirmPass(event.target.value)} />
                    </div>
                    <small id="cpassError" style={{ color: "red", visibility: "hidden", paddingLeft: "10px" }}></small>

                    <div className="form-group">
                        {/* <label htmlFor="College">College</label> */}
                        <input type="text" placeholder="Enter College"
                            value={college} onChange={(event) => setcollege(event.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="Mobile">Mobile Number</label> */}
                        <input type="number" placeholder="Enter Mobile Number"
                            value={mobile} onChange={(event) => setmobile(event.target.value)} />
                    </div>

                    <button type="submit" id="signUP-Button">Sign Up</button>
                    <br />
                    <p className="Login-direct">Already Have an Account: </p>
                    <p><Link to="/login" className="Login-direct">Login</Link></p>
                </form>
            </div></>
    )
};