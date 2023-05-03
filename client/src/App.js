import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import {Home} from "./pages/home";
import {SignUp} from "./pages/signUp";
import {Courses} from "./pages/courses";
import {Login} from "./pages/login";
import Cookies from "js-cookie";
// import { refresh } from "./http/apis";
// import Cookies from "js-cookie";
// import { useState, useEffect } from "react";
// import {ProtectedRoute} from ""
import {Navbar} from "./components/navbar"
import { useEffect, useState } from 'react';

function App() {
  // const [cookies,setCookies]=useCookies(["access_token"]);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <ProtectedRoute path="/"> */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
              </ProtectedRoute>
          }/>
          {/* <Home/> */}
          {/* </ProtectedRoute> */}
          {/* <ProtectedRoute to="/courses"> */}
          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses/>
            </ProtectedRoute>
          }/>
          {/* </ProtectedRoute> */}
        </Routes>
      </Router>
    </div>
  );
}

const ProtectedRoute = ({ children, ...rest }) => {
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  useEffect(() => {
      if (!Cookies.get("access_token")) {
        setIsUnauthorized(true)
        // (async () => {
        //   try {
        //         console.log(Cookies.get("access_token").length)
        //           console.log("Calling in Protected Route.....");
        //       } catch (err) {
        //           console.log(err);
        //           setIsUnauthorized(true);
        //       }
        //   })();
      }
  }, []);
  if (isUnauthorized) {
    return <Navigate to="/login" />
  }
  return children
  // return (
  //     <Route
  //         {...rest}
  //         render={({ location }) => {
  //             return isUnauthorized ? (
  //                 <Navigate to="/login" />
  //             ) : (
  //                 children
  //             );
  //         }}
  //     ></Route>
  // );
};

export default App;
