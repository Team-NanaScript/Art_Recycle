var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mainRouter = require("./routes/main");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/adminRouter");
var memberRouter = require("./routes/memberRouter");
var searchRouter = require("./routes/searchRouter");

const sequelize = require("./models/index").sequelize;
sequelize.sync();

var app = express();

// view engine setup
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/noso"),
  path.join(__dirname, "views/nana"),
  path.join(__dirname, "views/gogo"),
]);
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/member", memberRouter);
app.use("/search", searchRouter);

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
