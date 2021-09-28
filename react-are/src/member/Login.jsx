import React, { useCallback, useEffect, useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
// import user from "../mongo-are/models/user";

function Login() {
  const [user, setUser] = useState({});

  const [userList, setUserList] = useState([
    {
      tu_id: "",
      tu_pw: "",
    },
  ]);

  const userfetch = useCallback(async () => {
    // userList가 담겨있음
    const res = await fetch("http://localhost:5000/user");

    const users = await res.json();
    console.table(users);

    const _user = { ...users };

    if (user.u_id === _user.u_id) {
      history.push("/");
    } // else if (user === _user) {
    //   alert("ID 또는 password가 다릅니다.");
    // }

    // setUser(_user);
  }, []);
  // userfetch가 변화되면 사용할 수 있도록 하는 코드
  //   useEffect(userfetch, [userfetch]);

  const loginChange = (e) => {
    const { value, name } = e.target;

    // const login = { [name]: value };
    setUser({ ...user, [name]: value });
    // console.log("login", login);
    // setUserList(...userList);
  };

  const history = useHistory();

  const onLoginClick = (e) => {
    userfetch();
    // loginChange();
    // alert(user[0].u_id);
    console.log("user", user);
  };

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
          <input name="u_id" placeholder="ID" onChange={loginChange} />
          <span class="far fa-user"></span>
        </div>
        <div className="input_id">
          <input onChange={loginChange} name="u_pw" placeholder="PW" type="password" />
          <span class="fas fa-unlock-alt"></span>
        </div>
        {/* <Link to="/"> */}
        <button onClick={onLoginClick} className="btn_login">
          LOGIN
        </button>
        {/* </Link> */}
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
