// 여기는 memberRouter 입니다
var express = require("express");
var router = express.Router();

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/join", function (req, res, next) {
  res.render("join");
});

module.exports = router;
