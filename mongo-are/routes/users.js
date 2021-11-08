import express from "express";
const router = express.Router();
import passport from "passport";
// import user from "../models/user.js";
import users from "../models/user.js";
// import email from "../config/email.js";
import email from "../config/sempleEmail.js";

// const mailOpt = (user_data, title, contents) => {
//   const mailOption = {
//     from: "ArtRe",
//     to: users.email,
//     subject: "emil 인증번호를 확인해주세요",
//     text: <b>인증번호</b>,
//   };
//   return mailOption;
// };

// const sendMail = (mailOption) => {
//   mailPoster.sendMail(mailOption, function (err, send) {
//     if (err) {
//       console.log(`err : ${err}`);
//     } else {
//       console.log(`전송완료 : ${send}`);
//     }
//   });
// };

// const userList = {
//   u_id: "nana",
//   u_pw: "nanana",
//   u_email: "nananana",
//   u_name: "na",
//   u_nickname: "naa",
//   u_role: 0,
// };

var generateRandom = function (min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
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

router.post("/idcheck", async (req, res) => {
  console.log("여기까지 왔나요? 유효성검사");
  console.log("body", req.body);
  const { u_id } = req.body;
  // const isId = await users.findOne({ where: { u_id: req.body } });
  const isId = await users.findOne({ u_id });

  // const isEmail = users.findOne({where :{email : req.body.u_email}})

  // const check = res.json({
  //   u_id: req.user.u_id,
  // });
  console.log("isId", isId);
  if (isId) {
    console.log("일치하는 아이디 있음");
    res.json(isId);
  } else {
    console.log("일치하는 아이디 없음");
    res.json(isId);
  }
});

router.post("/echeck", async (req, res) => {
  const number = generateRandom(111111, 999999);

  const { u_email } = req.body;
  console.log("email", u_email);

  const mailOptions = {
    from: "ArtRe",
    to: u_email,
    subjct: "ArtRe 인증 관련 이메일입니다.",
    text: " 받으신 인증번호를 입력해주세요 " + number,
  };
  // const result = await
  email.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log("실패");
      // return res.send({ massage: "인증실패" });
    } else {
      console.log("성공?");
      // return res.send(number);
    }
  });
});

router.post("/login", passport.authenticate("local"), async (req, res) => {
  console.log("와 여기까지 왔다");
  console.log("login", req.user);

  const login = await res.json({
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
  // const user = req.json()
  console.log("왜 여기까지 안오냐고ㅗ오오오오오오");
  // await req.logout();
  // await req.session.distroy();
  await req.session.destroy((err) => {
    req.logout();
    console.log("logout?");
    res.send({ massage: "logout ok" });
  });
});

export default router;

// router.get("/logout", async (req, res) => {
//   await req.session.destroy((err) => {
//     req.logout();
//     // res.redirect("/");
//   });
