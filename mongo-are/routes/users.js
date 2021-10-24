import express from "express";
const router = express.Router();
import passport from "passport";
import user from "../models/user.js";
import users from "../models/user.js";

const userList = {
  u_id: "nana",
  u_pw: "nanana",
  u_email: "nananana",
  u_name: "na",
  u_nickname: "naa",
  u_role: 0,
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/test", async (req, res) => {
  res.json(userList);
  console.log(userList);
});

router.get("/test/:query", (req, res) => {
  let { query } = req.params;
  console.log(query);

  const tmpUserList = { ...userList, u_nickname: query };
  console.table(tmpUserList);
  // userList = [...userList, u_nickname=query]
  res.json(tmpUserList);
});
router.post("/", (req, res) => {
  // console.log("user", users);
  if (req.user) {
    console.log("session OK");
    res.json(req.user);
  } else {
    console.log("login 정보 없음");
    res.json([]);
  }
});

router.post("/signup", async (req, res) => {
  console.log("여기까지 왔나요? 유효성검사");
  const isId = await users.findOne({ where: { id: req.body.u_id } });

  // const isEmail = users.findOne({where :{email : req.body.u_email}})

  // const check = res.json({
  //   u_id: req.user.u_id,
  // });

  console.log("isId", isId);
  if (isId) {
    console.log("일치하는 아이디 없음");
  } else {
    console.log("일치하는 아이디 있음");
    // return check;
    return null;
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("와 여기까지 왔다");
  console.log("login", req.user);

  const login = res.json({
    u_id: req.user.u_id,
    u_pw: req.user.u_pw,
  });
  return login;
  // console.log("login 성공한 id,pw", res.json());
});

router.post("/join", async (req, res) => {
  // if (req.user) {
  //   const isId = users.findOne({ where: { id: req.body.u_id } });
  //   const isEmail = users.findOne({ where: { email: req.body.u_email } });
  //   console.log("id, email", isId, isEmail);
  // }
  console.log("넘어왔어??");
  console.log("join user정보", req.body);
  const userVO = new users(req.body);
  const response = await users.create(userVO);

  console.log("req.body", response);

  // console.log("res결과", response);

  // userVO.save((err.data) => {
  // res.json(data)
  // })
});

router.post("/logout", async (req, res) => {
  await req.logout();

  await req.session.distroy();
  console.log("logout?");
  res.send({ massage: "logout ok" });
});

export default router;
