import React from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { fetchLogin } from "../modules/memberFetch";
import { useUserContext } from "../context/UserContext";
// import user from "../mongo-are/models/user";

function Login() {
  const history = useHistory();

  // const [user, setUser] = useState();
  const { user, setUser } = useUserContext();

  const loginChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onLoginClick = async (e) => {
    const resultLogin = await fetchLogin(user.u_id, user.u_pw);
    await setUser(resultLogin);
    console.log("user", user);

    if (resultLogin !== null) {
      console.log("데이터있대?");
      // history.replace("/");
    } else if (resultLogin === null) {
      console.log("데이터없대?");
      return;
    }
    // if (user.u_id) {
    //   history.replace("/");
    // }
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
          <input onChange={loginChange} name="u_pw" placeholder="PW" />
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
