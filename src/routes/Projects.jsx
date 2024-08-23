import "./project.css";
import Workspace from "../components/projects/Workspace/Workspace.jsx";
import Category from "../components/projects/Category/Category.jsx";
import { useEffect, useState } from "react";
function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentProjectKey, setCurrentProjectKey] = useState("p1");
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
  //check for the clicked project to decide which one to dispalay
  const clickedProjectKey = (key) => {
    key && setCurrentProjectKey(key);
    console.log(key);
  };

  const whatToDisplay = projects.filter(
    (project) => project.id == currentProjectKey
  );

  return (
    <div className="projects-div">
      <div className="line"></div>
      <div className="categories-div">
        {projects ? (
          <Category projects={projects} clickedProject={clickedProjectKey} />
        ) : (
          <Category projects="" />
        )}{" "}
      </div>
      <div className="workspace-div">
        {whatToDisplay ? (
          <Workspace project={whatToDisplay[0]} />
        ) : (
          <Workspace project={projects[0]} />
        )}
      </div>
    </div>
  );
}

export default Projects;
