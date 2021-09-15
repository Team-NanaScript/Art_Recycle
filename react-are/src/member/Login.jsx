import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
// import user from "../mongo-are/models/user";

function Login() {

	// const {userList, setUserList} = useState({});

	const userfetch = async () => {
		const res = await fetch("http://localhost:5000/user")

		const user = await res.json();
		console.log(user)

		// if(userList.u_id === u_id) {
		// 	const userList = user.find(user.id);
		// }else {
		// 	console.log("불일치")
		}
	// 	return user
	// }
  return (
    <div>
      <header>
        {/* <div id="logo">
        <svg width="97" height="35">
          <text transform="translate(0 29)" fill="#27187f" fontSize="35" fontFamily="Ubuntu-Bold, Ubuntu" fontWeight="700">
            <tspan x="0" y="0">Art</tspan>
            <tspan y="0" fill="#758bfd">Re</tspan>
          </text>
		  </svg>
		 </div>    */}
      </header>
      <div className="id_pw">
        <div className="input_id">
          <input name="u_id" placeholder="ID" />
          <span class="far fa-user"></span>
        </div>
        <div className="input_id">
          <input name="u_pw" placeholder="PW" type="password" />
          <span class="fas fa-unlock-alt"></span>
        </div>
        <Link to="/">
          <button className="btn_login">LOGIN</button>
        </Link>
        <div className="btn_button">
          <button className="btn_find">ID/PW 찾기</button>
          <Link to="./Join">
            <button className="btn_join">회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
