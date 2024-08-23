import React, { useEffect, useState } from "react";
import "./tasks.css";
import Task from "../components/Task";
function Tasks({ projectTasks }) {
  let starting;
  let inProgress;
  let completed;
  projectTasks
    ? ((starting = projectTasks.filter((task) => task.status == "starting")),
      (inProgress = projectTasks.filter(
        (task) => task.status == "in progress"
      )),
      (completed = projectTasks.filter((task) => task.status == "completed")))
    : "";

  // console.log(tasks);

  return (
    <div className="body-div">
      <div className="upcoming-task">
        <div className="upcoming-title-div">
          <p>Upcoming Task</p>
          <i class="fa-solid fa-ellipsis"></i>

          
        </div>

        {starting ? <Task starting={starting} /> : <p>No Upcoming tasks</p>}
      </div>
      <div className="inprogress-task">
        <div className="inprogress-title-div">
          <p>Work In Progress</p>

          <i class="fa-solid fa-ellipsis"></i>
        </div>
        {inProgress ? (
          <Task inProgress={inProgress} />
        ) : (
          <p>No tasks in porogress</p>
        )}
      </div>
      <div className="completed-task">
        <div className="completed-title-div">
          <p>Completed Task</p>

          <i class="fa-solid fa-ellipsis"></i>
        </div>
        {completed ? <Task completed={completed} /> : <p>No Completed tasks</p>}
      </div>
    </div>
  );
}

export default Tasks;
