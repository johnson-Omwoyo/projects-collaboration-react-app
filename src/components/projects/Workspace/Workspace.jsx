import React from "react";
import Body from "./body/Body";
import Middle from "./middle/Middle";
import Top from "./top/Top";
import "./workspace.css";
function Workspace({ project }) {
  return (
    <div className="workspace-div">
      <div className="top-div">
        <Top />
      </div>
      <div className="top-line"></div>

      <div className="middle-div">
        {" "}
        <Middle title={project && project.projectname} />
      </div>
      <div className="body-div">
        <Body projectTasks={project && project.tasks} />
      </div>
    </div>
  );
}

export default Workspace;
