import "./project.css";
import Workspace from "../components/projects/Workspace/Workspace.jsx";
import Category from "../components/projects/Category/Category.jsx";
import { useEffect, useState } from "react";
function Projects() {
  const [projects, setProjects] = useState([]);
  const projectsURL = "http://localhost:5500/projects";
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(projectsURL);
        if (!response.ok) {
          throw new Error("Network issues");
        } else {
          const fetchedProjects = await response.json();
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects(projects);
  }, []);
  console.log(projects);
  return (
    <div className="projects-div">
      <div className="line"></div>
      <div className="categories-div">
        {projects ? <Category projects={projects} /> : <Category projects="" />}{" "}
      </div>
      <div className="workspace-div">
        {projects ? (
          <Workspace projects={projects} />
        ) : (
          <Workspace projects="" />
        )}
      </div>
    </div>
  );
}

export default Projects;
