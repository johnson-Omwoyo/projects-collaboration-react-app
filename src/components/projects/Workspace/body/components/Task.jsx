import React from "react";
import "./task.css";
function Task() {
  return (
    <>
      <div className="tasks-div">
        <input className="task-name" readOnly value={"server"} />
        <p className="description-title">Description</p>
        <p>This is a task for making the the project sit on the yellow sand</p>
        <div className="see-comments-div">
          <i class="fa-solid fa-comments"></i>
          <p className="view-comment">view comments</p>
        </div>
      </div>
      <div className="tasks-div">
        <input className="task-name" readOnly value={"server"} />
        <p className="description-title">Description</p>
        <p>This is a task for making the the project sit on the yellow sand</p>
        <div className="see-comments-div">
          <i class="fa-solid fa-comments"></i>
          <p className="view-comment">view comments</p>
        </div>
      </div>
      <div className="tasks-div">
        <input className="task-name" readOnly value={"server"} />
        <p className="description-title">Description</p>
        <p>This is a task for making the the project sit on the yellow sand</p>
        <div className="see-comments-div">
          <i class="fa-solid fa-comments"></i>
          <p className="view-comment">view comments</p>
        </div>
      </div>
      <div className="tasks-div">
        <input className="task-name" readOnly value={"server"} />
        <p className="description-title">Description</p>
        <p>This is a task for making the the project sit on the yellow sand</p>
        <div className="see-comments-div">
          <i class="fa-solid fa-comments"></i>
          <p className="view-comment">view comments</p>
        </div>
      </div>
    </>
  );
}

export default Task;
