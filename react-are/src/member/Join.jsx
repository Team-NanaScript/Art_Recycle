import React, { useState } from "react";
import "../css/Join.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { fetchJoin } from "../modules/memberFetch";

function Join() {
  // const { joinUser, setJoinUser } = useState({
  //   u_id: "",
  //   u_pw: "",
  //   u_email: "",
  //   u_name: "",
  //   u_nickname: "",
  // });
  const { user, setUser } = useUserContext();

  const joinChange = (e) => {
    const { value, name } = e.target;
    // console.log({ value, name });
    setUser({ ...user, [name]: value });
  };

  const joinClick = (e) => {
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
  };

  return (
    <div className="join_form">
      <div>
        <label>ID</label>
        <input onChange={joinChange} name="u_id" placeholder="ID는 3 ~ 15글자 내로 입력해주세요" />
        {/* <button>중복 확인</button> */}
      </div>
      <div>
        <label>Password</label>
        <input onChange={joinChange} name="u_pw" placeholder="비밀번호는 3 ~ 20글자 내로 입력해주세요" />
      </div>
      <div>
        <label>Password 확인</label>
        <input onChange={joinChange} name="u_pw" />
      </div>
      <div>
        <label>Email</label>
        <input onChange={joinChange} name="u_email" />
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
