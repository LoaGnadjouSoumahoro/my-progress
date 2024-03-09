import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            {" "}
            Add Techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="list"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            All Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
