import React, { useCallback, useEffect, useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
// import user from "../mongo-are/models/user";


function Login() {


	const [userList, setUserList] = useState({
		u_id : "",
		u_pw : ""
	})

	const [tuserList, setTuserList] = useState([{
		tu_id : "",
		tu_pw : "",
	}
	])

	const userfetch = useCallback(async () => {

	// 	// userList가 담겨있음
		const res = await fetch("http://localhost:5000/user")

		const users = await res.json();
		console.table(users)
		console.log(users)

		
		// const user = users.u_id === userList.u_id && users.u_pw === userList.u_pw
			
		// const user = users.filter( (user) => {
			// return users.u_id === userList.u_id && users.u_pw === userList.u_pw})
			setTuserList(users)
		// setUserList(users)
		// console.log(user)
		
		},[]);

		

		useEffect(userfetch, [userfetch])


	

	const loginIdChange = () => {
		const u_id = document.querySelector("input[name='u_id']").value


		//  = e.target.value
		alert("u_id" + u_id)

		// setUserList({
			// ...userList,u_id
		// })

		// tuserList.filter

		const r_user
		//  = "";
		= tuserList.filter( tuser => {
			// for(let i = 0 ; i < tuserList.length ; i++) {
			// 	if(u_id === tuserList[i].tu_id) {
			// 		r_user = tuserList[i]
			// 		break;
			// 	}
			return u_id === tuser.tu_id })
		// }
		setUserList([...r_user])
		console.log("userList",userList)



	}

	const loginPwChange = (e) => {
		const u_pw = e.target.value
		console.log("pw", u_pw)
		setUserList ({
			...userList,u_pw
		})
		console.log("userList",userList)
	}
	
	const history = useHistory();
		

	const onLoginClick = (e) => {
		userfetch(userList);
		loginIdChange()
		alert(userList[0].u_id)
		history.push("/")



	}



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
          <input onChange={loginPwChange} name="u_pw" placeholder="PW" type="password" />
          <span class="fas fa-unlock-alt"></span>
        </div>
        {/* <Link to="/"> */}
          <button onClick={onLoginClick} className="btn_login">LOGIN</button>
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
