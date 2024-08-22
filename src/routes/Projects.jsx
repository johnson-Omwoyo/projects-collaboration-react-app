import "./project.css";
import Workspace from "../components/projects/Workspace/Workspace.jsx";
import Category from "../components/projects/Category/Category.jsx";
function Projects() {
  return (
    <div className="projects-div">
      <div className="line"></div>
      <div className="categories-div">
        <Category />{" "}
      </div>
      <div className="workspace-div">
        <Workspace />
      </div>
    </div>
  );
}

export default Projects;
