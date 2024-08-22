import React from "react";
import "./category.css";
function Category() {
  return (
    <div>
      <div className="search-div">
        <input className="search" type="text" placeholder="Search" />
      </div>
      <hr className="search-line" />
      <div>
        <div className="favourite">
          <p className="favourite-title">Favourite</p>
          <p className="no-project"> No Favorites</p>
        </div>
        <div className="all-projects">
          <p className="all-projects-title">All Projects</p>
          <p className="no-project">you dont have any project</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
