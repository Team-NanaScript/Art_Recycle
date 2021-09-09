import React from "react";
import { NavLink } from "react-router-dom";
import "../css/search_nav.css";

function SearchNav() {
  const activeNavStyle = {
    backgroundColor: "whitesmoke",
  };

  return (
    <div className="search_nav">
      <ul className="search_nav">
        <li>
          <NavLink to="/search/local" exact activeClassName="active_nav">
            Local
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/material" exact activeClassName="active_nav">
            Material
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/way" exact activeClassName="active_nav">
            Way
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SearchNav;
