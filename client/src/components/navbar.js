import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import '../App.css';

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    // console.log(cookies["access_token"]);

    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userId");
        console.log("Executed!!")
        navigate("/login")
    };

    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fa fa-bars"></i>
                </label>
                <label className="logo">EaseE-Learning</label>
                <ul>
                    <li><Link to="/" className="link"> Home </Link></li>
                    <li><Link to="/courses" className="link">Courses</Link></li>
                </ul>

                {
                    !cookies["access_token"] ?
                        (
                            <ul>
                                <li><Link to="/signup" className="link"> Sign Up </Link></li>
                                <li><Link to="/login" className="link"> Login </Link></li>
                            </ul>
                        ) :
                        (
                            <ul>
                                <li><button onClick={logout} className="logout-btn">Logout</button></li>
                            </ul>
                        )
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
            </nav>
        </>
    )
};


