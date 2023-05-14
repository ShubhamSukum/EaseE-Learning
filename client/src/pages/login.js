import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const [, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://easee-learning.onrender.com/login", { username, password }).then((res) => {
                // console.log(res.data)
                // console.log(res.status)

                if (res.data.message === "success") {
                    // setCookies("access_token", res.data.token);
                    setCookies("access_token", res.data.token, { path: "/", domain: "ease-elearning.netlify.app" })
                    window.localStorage.setItem("userID", res.data.userId);
                    navigate("/");
                } else {
                    alert(res.data.message);
                }
            })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="center">

            <h1 >Login</h1>
            <i className="fa fa-user-circle" aria-hidden="true" 
            style={{ paddingBottom: "15px", fontSize: "40px", paddingLeft:"133px"}}></i>

            <form onSubmit={onSubmit}>

                <input type="text" placeholder="Enter Username"
                    value={username} onChange={(event) => setUsername(event.target.value)} />

                <input type="password" placeholder="Enter Password"
                    value={password} onChange={(event) => setpassword(event.target.value)} />

                <button type="submit" id="signUP-Button">Login</button>
                <br />

                <p >Don't have an account: </p>
                <p><Link to="/signup" className="Login-direct">Sign Up</Link></p>
            </form>

        </div>
    )
};