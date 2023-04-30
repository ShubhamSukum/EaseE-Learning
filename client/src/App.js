import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./pages/home";
import {Auth} from "./pages/auth";
import {Courses} from "./pages/courses";

import {Navbar} from "./components/navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
