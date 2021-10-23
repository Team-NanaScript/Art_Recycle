const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchLogin = async (u_id, u_pw) => {
  fetchOption.body = JSON.stringify({ u_id, u_pw });

  console.log("fetchLogin 아이디, 비밀번호", u_id, u_pw);
  const res = await fetch("http://localhost:5000/users/login", fetchOption);
  // console.log("fetchLogin res", res);
  // console.log("fetchLogin 오류발생지점");
  // console.table(users);

  if (res?.ok) {
    const users = await res.json();
    console.log("fetchlogin 성공시", users);
    return users;
  } else if (!res.ok) {
    console.log("로그인실패했대, fetchLogin");
    return [{}];
  }
};

const fetchUser = async () => {
  const res = await fetch("http://localhost:5000/users", fetchOption);

  return res.json();
};

const fetchJoin = async (joinData) => {
  console.log("ㅇㅇㅇ");
  fetchOption.body = JSON.stringify(joinData);
  const res = await fetch("http://localhost:5000/users/join", fetchOption);

  if (res.ok) {
    const json = await res.json();
    console.log("정보", json);
  } else {
    console.log("실패?");
  }
};

export { fetchLogin, fetchJoin, fetchUser };
