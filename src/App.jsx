import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Projects from "./routes/Projects";
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
function App() {
  return (
    <div className="app-div">
      <div className="sidebar-div">
       
        <Sidebar />
      </div>
      <div className="projects-div">
        <Projects />
      </div>
    </div>
  );
}

export default App;
