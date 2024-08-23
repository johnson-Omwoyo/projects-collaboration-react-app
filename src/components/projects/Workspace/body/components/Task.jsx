import React from "react";
import "./task.css";
function Task({ starting, inProgress, completed }) {
  starting && console.log(starting);
  return (
    <>
      {starting
        ? starting.map((start) => (
            <div className="tasks-div" key={start.id}>
              <input className="task-name" readOnly value={start.taskname} />
              <p className="description-title">Description</p>
              <p>{start.description} </p>
              <div className="see-comments-div">
                <i class="fa-solid fa-comments"></i>
                <p className="view-comment">view comments</p>
              </div>
            </div>
          ))
        : inProgress
        ? inProgress.map((progress) => (
            <div className="tasks-div" key={progress.id}>
              <input className="task-name" readOnly value={progress.taskname} />
              <p className="description-title">Description</p>
              <p>{progress.description} </p>
              <div className="see-comments-div">
                <i class="fa-solid fa-comments"></i>
                <p className="view-comment">view comments</p>
              </div>
            </div>
          ))
        : completed
        ? completed.map((complete) => (
            <div className="tasks-div" key={complete.id}>
              <input className="task-name" readOnly value={complete.taskname} />
              <p className="description-title">Description</p>
              <p>{complete.description} </p>
              <div className="see-comments-div">
                <i class="fa-solid fa-comments"></i>
                <p className="view-comment">view comments</p>
              </div>
            </div>
          ))
        : ""}
    </>
  );
}

export default Task;
