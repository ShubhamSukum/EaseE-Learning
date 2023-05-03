import {Link,useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar=()=>{
    const [cookies,setCookies]=useCookies(["access_token"]);
    // console.log(cookies["access_token"]);

    const navigate=useNavigate();

    const logout=()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("userId");
        navigate("/login")
    };
    
    return(
    <div className="navbar">
        <Link to="/" className="link"> Home </Link>
        <Link to="/courses" className="link">Courses</Link>

        {
            !cookies["access_token"]?
            (
                <div>
                    <Link to="/signup" className="link"> Sign Up </Link>
                    <Link to="/login" className="link"> Login </Link>
                </div>
            ):
            (<button onClick={logout} className="logout-btn">Logout</button>)
        }

        {/* Comments */}

        {/* <Link to="/signup" className="link"> Sign Up </Link>
            <Link to="/login" className="link"> Login </Link> */}

        {/* {
            !cookies["access_token"]?
            (
                <div>
                    <Link to="/login" className="link"> Home </Link>
                    <Link to="/login" className="link">Courses</Link>
                </div>
            ):(
                <div>
                    <Link to="/" className="link"> Home </Link>
                    <Link to="/courses" className="link">Courses</Link>
                </div>
            )
        } */}
    </div>
    )
};


