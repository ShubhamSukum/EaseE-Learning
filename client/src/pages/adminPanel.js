import { useNavigate } from "react-router-dom";

export const AdminPanel = () => {
  const navigate=useNavigate();
    return (
      <>
        <div className="center" id="admin-panel">
          <h1 
          style={{
            color:"darkblue",
            border:"0px solid black",
            backgroundColor:"skyblue",
            marginBottom:"5vh"
          }}>
            Admin Panel
           </h1>

          <h1>Add Category</h1>
          <button onClick={(e)=>{
            e.preventDefault();
            navigate("/addCategory");
          }}>Add</button>
          <br />
  
          <h1>Add Course</h1>
          <button onClick={(e)=>{
            e.preventDefault();
            navigate("/addCourse");
          }}>Add</button>
          <br />
  
          <h1>Add Modules</h1>
          <button onClick={(e)=>{
            e.preventDefault();
            navigate("/addModule");
          }}>Add</button>
          <br />
        </div>
      </>
    );
  };