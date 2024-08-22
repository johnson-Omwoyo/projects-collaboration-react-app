import React from "react";
import "./tasks.css";
import Task from "../components/Task";
function Tasks() {
  return (
    <div className="body-div">
      <div className="upcoming-task">
        <div className="upcoming-title-div">
          <p>Upcoming Task</p>
          <i class="fa-solid fa-plus"></i>
          <i class="fa-solid fa-ellipsis"></i>
        </div>

        <Task />
      </div>
      <div className="inprogress-task">
        <div className="inprogress-title-div">
          <p>Work In Progress</p>

          <i class="fa-solid fa-plus"></i>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <Task />
      </div>
      <div className="completed-task">
        <div className="completed-title-div">
          <p>Completed Task</p>

          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <Task />
      </div>
    </div>
  );
}

export default Tasks;
