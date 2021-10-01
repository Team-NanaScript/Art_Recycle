import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";
import { useHistory } from "react-router-dom";

function MainNav() {
  const activeStyle = {
    color: "#27187f",
    borderRadius: "30px",
    backgroundColor: "#bac5ff",
  };

  const history = useHistory();

  return (
    <header className="App-header">
      <div
        id="logo"
        onClick={() => {
          history.push("/");
        }}
      >
        <svg width="97" height="35">
          <text
            transform="translate(0 29)"
            fill="#27187f"
            fontSize="35"
            fontFamily="Ubuntu-Bold"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              Art
            </tspan>
            <tspan y="0" fill="#758bfd">
              Re
            </tspan>
          </text>
        </svg>
      </div>
      <div className="menu_wrap">
        <nav className="main_menu center">
          <NavLink to="/" exact activeStyle={activeStyle}>
            A-Re 소개
          </NavLink>
          <NavLink to="/search/local" exact activeStyle={activeStyle}>
            공방찾기
          </NavLink>
          <NavLink to="/board" exact activeStyle={activeStyle}>
            커뮤니티
          </NavLink>
        </nav>
        <nav className="main_menu right">
          <NavLink to="/" exact activeStyle={activeStyle}>
            공방등록
          </NavLink>
          <NavLink to="/join" exact activeStyle={activeStyle}>
            회원가입
          </NavLink>
          <NavLink to="/login" exact activeStyle={activeStyle}>
            로그인
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
