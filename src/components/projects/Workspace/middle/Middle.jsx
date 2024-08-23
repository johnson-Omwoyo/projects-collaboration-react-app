import React, { useState } from "react";
import "./middle.css";
function Middle({ title }) {
  const [selected, setSelected] = useState();
  const handleMiddleNavbarClick = (e) => {
    setTimeout(() => {
      const clickedLink = e.target.getAttribute("name");
      setSelected(clickedLink);
    }, 500);
  };
  return (
    <div className="middle">
      <div className="middle-top">
        <div className="project-title">
          <p>{title ? title : "Native Project"}</p>
          <i className="fa-solid fa-circle-exclamation"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="participants">
          <i className="fa-solid fa-people-roof"></i>
          <div className="line-people-addpeople"></div>
          <button>
            <i className="fa-solid fa-plus"></i> Add Members
          </button>
        </div>
      </div>
      <div className="middle-bottom">
        <div className="navbar ">
          <div className={selected == "overview" ? "selected" : ""}>
            {" "}
            <p
              className="selected"
              name="overview"
              onClick={handleMiddleNavbarClick}
            >
              Overview
            </p>
          </div>
          <div className={selected == "task" ? "selected" : ""}>
            <p name="task" onClick={handleMiddleNavbarClick}>
              Task
            </p>
          </div>
          <div className={selected == "discussion" ? "selected" : ""}>
            <p name="discussion" onClick={handleMiddleNavbarClick}>
              Discussions
            </p>
          </div>
          <div className={selected == "files" ? "selected" : ""}>
            <p name="files" onClick={handleMiddleNavbarClick}>
              Files
            </p>
          </div>
        </div>
        <div className="additional-icons">
          <i name="calendar" className="fa-regular fa-calendar-days"></i>
        </div>
      </div>
      <div className="middle-div-line"></div>
    </div>
  );
}

export default Middle;
