import {Link} from "react-router-dom";

export const Navbar=()=>{
    return(
    <div className="navbar">
        <Link to="/" className="link"> Home </Link>
        <Link to="/courses" className="link">Courses</Link>
        <Link to="/auth" className="link"> Auth </Link>
    </div>
    )
};