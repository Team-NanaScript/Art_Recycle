const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchCheck = async (checkData) => {
  fetchOption.body = JSON.stringify(checkData);
  console.log("checkData", checkData);
  const res = await fetch("http://localhost:5000/users/signup", fetchOption);

  if (res.ok) {
    const json = await res.json();
    console.log("정보", json);
  } else {
    console.log("실패?");
  }
};

const fetchLogin = async (u_id, u_pw) => {
  fetchOption.body = JSON.stringify({ u_id, u_pw });

  console.log("fetchLogin 아이디, 비밀번호", u_id, u_pw);
  const res = await fetch("http://localhost:5000/users/login", fetchOption);
  // console.log("fetchLogin res", res);
  console.log("fetchLogin 오류발생지점");
  // console.table(users);

  if (res?.ok) {
    const users = await res.json();
    console.log("fetchlogin 성공시", users);
    return users;
  } else {
    console.log("로그인실패했대, fetchLogin");
    return [{}];
  }
};

const fetchUser = async () => {
  const res = await fetch("http://localhost:5000/users", fetchOption);
  if (res?.ok) {
    return res.json();
  } else {
    return [];
  }
};

const fetchJoin = async (joinData) => {
  fetchOption.body = JSON.stringify(joinData);
  const res = await fetch("http://localhost:5000/users/join", fetchOption);

  if (res.ok) {
    const json = await res.json();
    console.log("정보", json);
  } else {
    console.log("실패?");
  }
};

const fetchLogout = async () => {
  // const res =
  await fetch("http://localhost:5000/users/logout", fetchOption);
  // const res =
  // await fetch("http://localhost:5000/user/logout");
  alert("logout 을 성공하였습니다");
  console.log("logout");

  // console.log("res.json", res.json());

  // return res.json();
};

export { fetchLogin, fetchJoin, fetchUser, fetchCheck, fetchLogout };
