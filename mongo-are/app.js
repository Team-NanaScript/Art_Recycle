/**
 * express generator ES6+ template
 * @edit : callor@callor.com
 * @since : 2020-12-10
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import cors from "cors";
import passport from "passport";
import PassportConfig from "./modules/PassportConfig.js";
import session from "express-session";
import flash from "connect-flash";

/** mongoose DB 관련 */
import mongoose from "mongoose";

const dbConn = mongoose.connection;

dbConn.once("open", () => {
  console.log("˚✧₊⁎( ˘ω˘ )⁎⁺˳✧༚ \n MongoDB Open !! \n ˚✧₊⁎⁺˳✧༚˚✧₊⁎⁺✧˳");
});
dbConn.on("error", () => {
  console.error;
});

mongoose.connect("mongodb://localhost:27017/are");

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import boardRouter from "./routes/board.js";
import atelierRouter from "./routes/atelier.js";

const app = express();

const whiteURL = ["http://localhost:3000"];
const corsOption = {
  origin: (origin, callback) => {
    const isWhiteURL = whiteURL.indexOf(origin) !== -1;
    callback(null, isWhiteURL);
  },
  //로그인 다음 세션정보를 클라이언트에게 전달하겠다는 의미
  credentials: true,
};

app.use(cors(corsOption)); // 여기수정필요

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./public")));

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
app.use(flash());

// 미들웨어 넣어주기
// response를 할 때 session에 담긴 값을 클라이언트로 전송하기 위한 옵션설정

app.use((req, res, next) => {
  // cors로 허용해준 로컬호스트를 넣어주기
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);
app.use("/atelier", atelierRouter);

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

export default app;
