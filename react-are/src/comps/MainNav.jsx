import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function MainNav() {
  const { user } = useUserContext();

  const activeStyle = {
    color: "#27187f",
    borderRadius: "30px",
    backgroundColor: "#bac5ff",
  };

  const dispalyStyle = {
    display: "flex",
  };

  const navLeftList = [
    { id: 0, title: "A-Re 소개", link: "/" },
    { id: 1, title: "공방찾기", link: "/search/local" },
    { id: 2, title: "커뮤니티", link: "/board" },
  ];
  const navRightList = [
    { id: 3, title: "공방등록", link: "/" },
    { id: 4, title: "회원가입", link: "/join" },
    user?.u_id ? { id: 5, title: "로그아웃", link: "/logout" } : { id: 5, title: "로그인", link: "/login" },
  ];

  const navLeftItem = navLeftList.map((left) => {
    return (
      <li>
        <NavLink to={left.link}>{left.title}</NavLink>
      </li>
    );
  });
  const navRightItem = navRightList.map((right) => {
    return (
      <li>
        <NavLink to={right.link}>{right.title}</NavLink>
      </li>
    );
  });

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
          <text transform="translate(0 29)" fill="#27187f" fontSize="35" fontFamily="Ubuntu-Bold" fontWeight="700">
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
          <ul style={dispalyStyle}>{navLeftItem}</ul>

          {/* <NavLink to="/" exact activeStyle={activeStyle}>
            A-Re 소개
          </NavLink>
          <NavLink to="/search/local" exact activeStyle={activeStyle}>
            공방찾기
          </NavLink>
          <NavLink to="/board" exact activeStyle={activeStyle}>
            커뮤니티
          </NavLink> */}
        </nav>
        <nav className="main_menu right">
          {/* <NavLink to="/" exact activeStyle={activeStyle}>
            공방등록
          </NavLink>
          <NavLink to="/join" exact activeStyle={activeStyle}>
            회원가입
          </NavLink>
          <NavLink to="/login" exact activeStyle={activeStyle}>
            로그인
          </NavLink> */}
          <ul style={dispalyStyle}>{navRightItem}</ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
