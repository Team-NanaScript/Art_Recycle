// 여기는 searchRouter 입니다
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("search");
});

router.get("/local", function (req, res, next) {
  res.render("localSearch");
});

module.exports = router;
