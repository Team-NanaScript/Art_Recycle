import React from "react";
import { NavLink } from "react-router-dom";
import "../css/search_nav.css";

function CommunityNav() {
  return (
    <div className="search_nav">
      <ul className="search_nav">
        <li>
          <NavLink to="/notice" exact activeClassName="active_nav">
            공지사항
          </NavLink>
        </li>
        <li>
          <NavLink to="/board" exact activeClassName="active_nav">
            커뮤니티
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default CommunityNav;
