import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import {Home} from "./pages/home";
import {SignUp} from "./pages/signUp";
import {Courses} from "./pages/courses";
import {Login} from "./pages/login";
import {AllCourses} from "./pages/allCourses"
import {YtCourse} from "./pages/courseYT";
import {AdminVerification} from "./pages/adminVerify";
import {AdminPanel} from "./pages/adminPanel";
import {AddCategory} from "./pages/addCategory";
import {AddCourse} from "./pages/addCourse";
import {AddModule} from "./pages/addModule";

import Cookies from "js-cookie";
// import comments  
import {Navbar} from "./components/navbar";
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/component/:compName" element={<ProtectedRoute>
              <Courses/>
            </ProtectedRoute>}/> 

            <Route path="/allcourses" element={
            <ProtectedRoute>
              <AllCourses/>
            </ProtectedRoute>}/>

            {/* Admin Routes */}

            <Route path="/adminVerify" element={<AdminVerification/>}></Route>
            <Route path="/adminPanel" element={<AdminPanel/>}></Route>
            <Route path="/addCategory" element={<AddCategory/>}></Route>
            <Route path="/addCourse" element={<AddCourse/>}></Route>
            <Route path="/addModule" element={<AddModule/>}></Route>

            {/* Admin Routes */}

            
            <Route path="/ytcoursemodule/:ytcourse" element={<YtCourse/>}/>

            {/* // element = {FunctionPage code}  should be in Pascal Case camelCase 
            gives error I wasted my 30 mins on it T-T */}
            
            {/* if we use  <Route path=..... element={<courses/>}/>  if c is small then it gives error 
            USE PascalCase DON'T USE camelCase */}

            {/* <ProtectedRoute path="/"> */}

          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          
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
        // comment 1
      }
  }, []);

  if (isUnauthorized) {
    return <Navigate to="/login" />
  }

  return children
        // comment 2
};

export default App;


/* comment 0 */




// comment 1

// (async () => {
//   try {
//         console.log(Cookies.get("access_token").length)
//           console.log("Calling in Protected Route.....");
//       } catch (err) {
//           console.log(err);
//           setIsUnauthorized(true);
//       }
//   })();

// comment 2

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

// import comments

// import { refresh } from "./http/apis";
// import Cookies from "js-cookie";
// import { useState, useEffect } from "react";
// import {ProtectedRoute} from ""


