import React, { useState } from "react";
import "./category.css";

function Category({ projects, clickedProject }) {
  // State to manage search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.projectname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter favorite projects
  const favoriteProjects = filteredProjects.filter(
    (project) => project.favorite
  );
  // Filter all projects excluding favorites
  const allProjects = filteredProjects.filter((project) => !project.favorite);

  return (
    <div>
      <div className="search-div">
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr className="search-line" />

      {searchTerm && filteredProjects.length === 0 ? (
        <p className="no-project">No project with such name</p>
      ) : (
        <div>
          <div className="favourite">
            <p className="favourite-title">Favourite</p>
            {favoriteProjects  ? (
              favoriteProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => clickedProject(project.id)}
                  className="favorite-button"
                >
                  {project.projectname}
                </button>
              ))
            ) : (
              <p className="no-project">No Favorites</p>
            )}
          </div>
          <div className="all-projects">
            <p className="all-projects-title">All Projects</p>
            {allProjects ? (
              allProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => clickedProject(project.id)}
                  className="project-button"
                >
                  {project.projectname}
                </button>
              ))
            ) : (
              <p className="no-project">No Projects Found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
