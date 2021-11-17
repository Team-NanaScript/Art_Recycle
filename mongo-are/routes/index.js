import express from "express";
const router = express.Router();
import USER from "../models/user.js";
import { tags } from "../models/hashTag.js";
import atelier from "../models/atelier.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Callor Express Template" });
});

const userList = {
  u_id: "nana",
  u_pw: "nanana",
  u_email: "nananana",
  u_name: "na",
  u_nickname: "naa",
  u_role: 0,
};

router.get("/data", (req, res) => {
  const result = USER.create(userList);
  res.json(userList);
});

router.get("/user", async (req, res) => {
  // const users = await USER.find({});
  // console.table(userList)
  res.json(userList);
});

router.post("/user", (req, res) => {
  const body = req.body;
  console.log(body);
});

router.get("/test", (req, res) => {
  // console.log(tags)
  res.json(tags);
});

router.get(decodeURI("/testok/:query"), (req, res) => {
  let { query } = req.params;
  //   console.log("hello", query);

  //   let decoQuery = decodeURIComponent(query);
  //   console.log(decoQuery);

  // let tmpString = "M01"
  // const result = tmpString.includes(query.trim())

  // const result = await tags.find({h_id:query})
  //   const result = tags.filter((tag) => {
  // tag.h_text.includes(query.trim());
  //   });

  //   const result = tags.map((tag) => {
  // if (tag.h_text.includes(query.trim())) return tag;
  //   });

  console.table(result);
  res.json(result);
});

// const atelier = Schema({
// 	at_seq: String, // 공방코드
// 	at_name: String, // 공방명
// 	at_subname: String, // 간단소개
// 	at_addr: String, // 주소
// 	at_on: String, // 영업시간
// 	at_site: String, // 웹사이트
// 	at_desc: String, // 공방소개
//   });

// 공방이름 쿼리 검색 index에서 atelier로 이동함
// db.ateliers.find({"at_name":{$regex: ".*do.*"}}).pretty()
router.get(decodeURI("/searchok/:query"), async (req, res) => {
  let { query } = req.params;

  let search_query = ".*" + query + ".*";
  const result = await atelier.find({ at_name: { $regex: query } });
  //   const result = await atelier.find({});
  //   if (result.exists()) {
  //   console.log("at", result);
  await res.json(result);
  //   } else {
  // console.log("?");
  // res.json({});
  //   }
});

export default router;
