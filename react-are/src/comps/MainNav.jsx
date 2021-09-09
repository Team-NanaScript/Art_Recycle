import React from "react";
import {NavLink} from "react-router-dom";
import "../css/main.css"

function MainNav() {
  return (
    <header className="App-header">
      <div id="logo">
        <svg width="97" height="35">
          <text transform="translate(0 29)" fill="#27187f" fontSize="35" fontFamily="Ubuntu-Bold" fontWeight="700">
            <tspan x="0" y="0">Art</tspan>
            <tspan y="0" fill="#758bfd">Re</tspan>
          </text>
        </svg>
      </div>
        <nav className="menu_wrap">
          <ul className="main_menu center">
            <li><NavLink to="/" exact>A-Re 소개</NavLink></li>
            <li><NavLink to="/search/local" exact>공방찾기</NavLink></li>
            <li><NavLink to="/" exact>커뮤니티</NavLink></li>
          </ul>
          <ul className="main_menu right">
            <li><NavLink to="/" exact>공방등록</NavLink></li>
            <li><NavLink to="/join" exact>회원가입</NavLink></li>
            <li><NavLink to="/login" exact>로그인</NavLink></li>
          </ul>
        </nav>
    </header>
  );
}

export default MainNav;
