import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = Schema({
  u_id: String,
  u_pw: String,
  u_email: String,
  u_name: String,
  u_nickname: String,
  u_role: Number,
});

export default user;
