import React from "react";
import Body from "./body/Body";
import Middle from "./middle/Middle";
import Top from "./top/Top";
import './workspace.css'
function Workspace() {
  return (
    <div className="workspace-div">
      <div className="top-div">
        <Top />
      </div>
     <div className="top-line"></div>

      <div className="middle-div">
        {" "}
        <Middle />
      </div>
      <div className="body-div">
        <Body />
      </div>
    </div>
  );
}

export default Workspace;
