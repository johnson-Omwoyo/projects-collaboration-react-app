import React from "react";
import "./body.css";
import Tasks from "./routes/Tasks";
import Overview from "./routes/Overview";
import Files from "./routes/Files";
import Discussion from "./routes/Discussion";
function Body({ projectTasks }) {
  return (
    <>
      <Tasks projectTasks={projectTasks && projectTasks} />
      <Overview />
      <Files />
      <Discussion />
    </>
  );
}

export default Body;
