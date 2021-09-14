var express = require("express");
var router = express.Router();
const USER = require("../models/user");

const userList = {
  u_id: "nana",
  u_pw: "nanana",
  u_email: "nananana",
  u_name: "na",
  u_nickname: "naa",
  u_role: 00,
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/data", (req, res) => {
  const result = USER.create(userList);
  res.json(userList);
});

module.exports = router;
