import React, { useState } from "react";
import "../css/Join.css";
import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { fetchIdCheck, fetchJoin, fetchEmailCheck } from "../modules/memberFetch";

function Join() {
  // const { joinUser, setJoinUser } = useState({
  //   u_id: "",
  //   u_pw: "",
  //   u_email: "",
  //   u_name: "",
  //   u_nickname: "",
  // });
  const { user, setUser } = useUserContext();
  const history = useHistory();

  const joinChange = (e) => {
    const { value, name } = e.target;
    // console.log({ value, name });
    setUser({ ...user, [name]: value });
    // if(u_id == )
  };

  const joinCheck = (e) => {
    const checkData = {
      u_id: user.u_id,
      // u_email: user.u_email,
      // u_nickname: user.u_nick,
    };
    fetchIdCheck(checkData);
  };

  const joinEmailCheck = (e) => {
    const checkEmail = {
      u_email: user.u_email,
    };
    fetchEmailCheck(checkEmail);
  };

  const joinClick = (e) => {
    if (!user?.u_id) {
      alert("아이디를 입력해주세요");
      return;
    }
    if (!user?.u_pw) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!user?.u_email) {
      alert("이메일을 입력해주세요");
      return;
    }
    if (!user?.u_name) {
      alert("이름을 입력해주세요");
      return;
    }
    // if (!user?.u_nickname) {
    //   alert("사용할 닉네임을 입력해주세요");
    //   return;
    // }

    const joinData = {
      u_id: user.u_id,
      u_pw: user.u_pw,
      u_email: user.u_email,
      u_name: user.u_name,
      u_nickname: user.u_nick,
    };
    console.log("넘겨준데이터", joinData);
    fetchJoin(joinData);
    console.log("join됐나?");
    history.push("/login");
  };

  return (
    <div className="join_form">
      <div className="check_box1">
        <label>ID</label>
        <input onChange={joinChange} name="u_id" />
        <input id="id_check" type="button" onClick={joinCheck} value="중복확인" />
      </div>
      <div>
        <label>Password</label>
        <input onChange={joinChange} name="u_pw" placeholder="비밀번호는 3 ~ 20글자 내로 입력해주세요" />
      </div>
      <div>
        <label>Password 확인</label>
        <input onChange={joinChange} name="u_pw" />
      </div>
      <div className="check_box2">
        <label>Email</label>
        <input onChange={joinChange} name="u_email" />
        <input id="email_check" type="button" onClick={joinEmailCheck} value="중복확인" />
        {/* <button>이메일 확인</button> */}
      </div>
      <div>
        <label>Name</label>
        <input onChange={joinChange} name="u_name" />
      </div>
      <div>
        <label>NickName</label>
        <input onChange={joinChange} name="u_nick" />
      </div>
      <div className="btn_join">
        <button onClick={joinClick}>가입하기</button>
      </div>
    </div>
  );
}

export default Join;
