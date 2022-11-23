import React from "react";
import "./CSS/CategoriesCard.css";
import { NavLink } from "react-router-dom";

const Categories = (props) => {
  return (
    <div className="CategoryDevider">
      <div className="Categories-main">
        <h3 className="Categories-heading"> Categories </h3>

        <div className="ListOfCourses">
          <NavLink to="/home/all" activeClassName="active-category">
            All Courses
          </NavLink>
          <NavLink to="/home/Physics" activeClassName="active-category">
            Physics{" "}
          </NavLink>
          <NavLink to="/home/Chemistry" activeClassName="active-category">
            Chemistry{" "}
          </NavLink>
          <NavLink to="/home/Mathematics" activeClassName="active-category">
            Mathematics{" "}
          </NavLink>
          <NavLink to="/home/Biology" activeClassName="active-category">
            Biology
          </NavLink>
          <NavLink to="/home/Kids" activeClassName="active-category">
            Kids{" "}
          </NavLink>
          <NavLink to="/home/Aptitude" activeClassName="active-category">
            Aptitude
          </NavLink>
          <NavLink
            to="/home/Logical Reasoning"
            activeClassName="active-category"
          >
            Logical Reasoning
          </NavLink>
          <NavLink
            to="/home/preferences"
            className="recommended"
            activeClassName="active-category"
          >
            Recommended!
          </NavLink>
        </div>
      </div>

      <div className="Course-Devider"></div>

      <div className="CategoriesSlider">
        <NavLink to="/home/all" activeClassName="Sactive-category">
          All Courses
        </NavLink>
        <NavLink to="/home/Physics" activeClassName="Sactive-category">
          Physics{" "}
        </NavLink>
        <NavLink to="/home/Chemistry" activeClassName="Sactive-category">
          Chemistry{" "}
        </NavLink>
        <NavLink to="/home/React" activeClassName="Sactive-category">
          React{" "}
        </NavLink>
        <NavLink to="/home/Biology" activeClassName="Sactive-category">
          Biology
        </NavLink>
        <NavLink to="/home/Kids" activeClassName="Sactive-category">
          Kids{" "}
        </NavLink>
        <NavLink to="/home/Aptitude" activeClassName="Sactive-category">
          Aptitude
        </NavLink>
        <NavLink to="/home/NodeJs" activeClassName="Sactive-category">
          NodeJs
        </NavLink>
        <NavLink
          to="/home/preferences"
          className="recommended"
          activeClassName="active-category"
        >
          Recommended!
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
