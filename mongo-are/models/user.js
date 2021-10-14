const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = Schema({
  u_id: String,
  u_pw: String,
  u_email: String,
  u_name: String,
  u_nickname: String,
  u_role: Number,
});

module.exports = mongoose.model("users", user);
