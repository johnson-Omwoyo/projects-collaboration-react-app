import React, { useState } from "react";
import "./sidebar.css";
function Sidebar() {
  const [selected, setSelected] = useState("");

  const handleSidebarClick = (e) => {
    setTimeout(() => {
      const clickedName = e.target.getAttribute("name");
      setSelected(clickedName);
    }, 500);
  };

  return (
    <>
      <div className="sidebar-div">
        <div className="logo">
          <i className="fa-brands fa-pied-piper"></i>
        </div>
        <button
          className={
            selected == "home" ? "selected-sidebar-icon" : "sidebar-div-button "
          }
        >
          <i
            name="home"
            onClick={handleSidebarClick}
            className="fa-solid fa-bars-progress "
          ></i>
        </button>
        <button
          className={
            selected == "message"
              ? "selected-sidebar-icon messages-button"
              : "sidebar-div-button messages-button "
          }
        >
          <i
            name="message"
            onClick={handleSidebarClick}
            className="fa-solid fa-envelope"
          ></i>
          <div className="badgeb">1</div>
        </button>
        <button
          className={
            selected == "connect"
              ? "selected-sidebar-icon  friends-button"
              : "sidebar-div-button friends-button "
          }
        >
          <i
            name="connect"
            onClick={handleSidebarClick}
            className="fa-solid fa-user-group"
          ></i>
          <div className="badgeb">4</div>
        </button>
        <button
          className={
            selected == "notification"
              ? "notification-button selected-sidebar-icon "
              : "notification-button sidebar-div-button  "
          }
        >
          <i
            name="notification"
            onClick={handleSidebarClick}
            className="fa-solid fa-bell"
          ></i>
          <div className="badgeb">3</div>
        </button>
        <button
          className={
            selected == "settings"
              ? "  selected-sidebar-icon "
              : "sidebar-div-button"
          }
        >
          <i
            name="settings"
            onClick={handleSidebarClick}
            className="fa-solid fa-gear"
          ></i>
        </button>
        <div className="sidebar-foot">
          <i className="fa-solid fa-circle-info"></i>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
