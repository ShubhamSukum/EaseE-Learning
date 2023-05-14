import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../App.css";
import { useState } from "react";

export const Navbar = () => {
  const [cookies, , removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [ourCookie, setOurCookie] = useState(false);

  useEffect(() => {
    if (cookies["access_token"]) {
      setOurCookie(true);
    } else {
      setOurCookie(false);
    }
  }, [cookies]);

  const handleCtrlG = useCallback(() => {
    navigate("/adminVerify");
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "g") {
        event.preventDefault();
        handleCtrlG();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCtrlG]);

  const logout = () => {
    removeCookie("access_token", { path: "/", domain: "ease-elearning.netlify.app" });
    localStorage.removeItem("userID");
    navigate("/login");
  };

  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa fa-bars"></i>
        </label>

        <Link to="/">
          <label className="logo">EaseE-Learning</label>
        </Link>

        {!ourCookie ? (
          <ul>
            <li>
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        )}

        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/allcourses" className="link">
              Courses
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};