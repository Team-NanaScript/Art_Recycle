import express from "express";
const router = express.Router();
import USER from "../models/user.js";

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

export default router;
