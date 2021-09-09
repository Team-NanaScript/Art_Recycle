import React from "react";
import "../css/Join.css"

function Join() {
  return (
    <div className ="join_form">
		<div>
		<label>ID</label>
      	<input name="u_id" placeholder="ID는 3 ~ 15글자 내로 입력해주세요"/>
		{/* <button>중복 확인</button> */}
	  	</div>
		  <div>
		<label>Password</label>
      	<input name="u_pw" placeholder="비밀번호는 3 ~ 20글자 내로 입력해주세요"/>
	  	</div>
		  <div>
		<label>Password 확인</label>
      	<input name="u_pw" />
	  	</div>
		  <div>
		<label>Email</label>
      	<input name="u_email" />
		  {/* <button>이메일 확인</button> */}
	  	</div>
		  <div>
		<label>Name</label>
      	<input name="u_name" />
	  	</div>
		  <div>
		<label>NickName</label>
      	<input name="u_nick" />
	  	</div>
		<div className="btn_join">
		  <button>가입하기</button>
		</div>
    </div>
  );
}

export default Join;
