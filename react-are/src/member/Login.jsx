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
    console.log();
    await setUser(resultLogin);
    console.log("user", user.u_id, user.u_pw);

    if (resultLogin) {
      if (user) {
        console.log("데이터있대?");
        history.replace("/");
      }
      // if (!user || resultLogin.u_pw !== user.u_pw) {
      if (!user) {
        console.log("데이터없대?");
        return null;
      }
    }
    // if (user.u_id) {
    //   history.replace("/");
  };

  const onJoinGo = (e) => {
    history.push("/join");
  };

  return (
    <div>
      <header>
        <meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1, user-scalable=yes,initial-scale=1.0" />
      </header>
      {/* <div className="login"> */}
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
          {/* <Link to="./Join"> */}
          <button className="btn_join" onClick={onJoinGo}>
            회원가입
          </button>
          {/* </Link> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Login;
