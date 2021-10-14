var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const PassportConfig = require("./modules/PassportConfig.js");
const session = require("express-session");

/** mongoose DB 관련 */
const mongoose = require("mongoose");

const dbConn = mongoose.connection;

dbConn.once("open", () => {
  console.log("˚✧₊⁎( ˘ω˘ )⁎⁺˳✧༚ \n MongoDB Open !! \n ˚✧₊⁎⁺˳✧༚˚✧₊⁎⁺✧˳");
});
dbConn.on("error", () => {
  console.error;
});

mongoose.connect("mongodb://localhost:27017/are");

/** */

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const whilteURL = ["http://localhost:3000"];
const corsOption = {
  origin: (origin, callback) => {
    const isWhiteURL = whilteURL.indexOf(origin) !== -1;
    callback(null, isWhiteURL);
  },
  //로그인 다음 세션정보를 클라이언트에게 전달하겠다는 의미
  credentials: true,
};

app.use(cors(corsOption)); // 여기수정필요

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 세션활성화
const oneDay = 1000 * 60 * 60 * 24; // 밀리초 * 60초 * 60분 * 24시간
app.use(
  session({
    secret: "aa1234", // 세션의 비밀키..?
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: oneDay,
    },
  })
);

app.use(passport.initialize()); // passport start
app.use(passport.session());
PassportConfig();

// 미들웨어 넣어주기
// response를 할 때 session에 담긴 값을 클라이언트로 전송하기 위한 옵션설정

app.use((req, res, next) => {
  // cors로 허용해준 로컬호스트를 넣어주기
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
