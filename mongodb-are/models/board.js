import mongoose from "mongoose";

const Schema = mongoose.Schema;

const board = Schema({
  b_seq: String,
  b_title: String,
  b_date: String,
  b_time: String,
  b_writer: String,
  b_content: String,
});

export default board;
