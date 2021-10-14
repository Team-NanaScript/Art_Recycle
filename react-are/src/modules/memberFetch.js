const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchLogin = async () => {
  // userList가 담겨있음
  const res = await fetch("http://localhost:5000/users");

  const users = await res.json();
  console.table(users);

  //   setUser(users);

  console.log("DB유저" + users);
};

const fetchUser = () => {};

const fetchJoin = () => {};

export { fetchLogin };
