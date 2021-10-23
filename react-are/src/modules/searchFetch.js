const fetchOption = {
	method: "POST",
	headers: {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "http://localhost:3000",
	},
	credentials: "include",
};

// const fetchHashSearch = async () => {
// 	fetchOption.body = JSON.stringify({ u_id, u_pw });
  
// 	console.log("fetchLogin 아이디, 비밀번호", u_id, u_pw);
// 	const res = await fetch("http://localhost:5000/users/login", fetchOption);
// 	// console.log("fetchLogin res", res);
// 	console.log("fetchLogin 오류발생지점");
// 	// console.table(users);
  
// 	if (res.ok) {
// 	  const users = await res.json();
  
// 	  console.log("fetchlogin", users);
// 	  return users;
// 	}
// };

const hashSearch = async () =>{
	// fetchOption.body = JSON.stringify(hashTagList)

	// const res = await fetch("http://localhost:5000/test", fetchOption);
	const res = await fetch("http://localhost:5000/test")
	
	const result = await res.json()
	return result
}