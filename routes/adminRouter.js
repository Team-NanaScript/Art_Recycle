// 여기는 adminRouter 입니다
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("admin");
});

module.exports = router;
