import React from "react";
import "./top.css";
function Top() {

  return (
    <div className="top">
      <div className="left-div">
        <p className="workspace-text">Workspace</p>
      </div>
      <div className="right-div">
        <div className="notification-icon-div">
          <i class="fa-solid fa-bell"></i>
        </div>
        <img
          className="profilepic"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p className="profile-name">johnson Omwoyo</p>
      </div>
    </div>
  );
}

export default Top;
