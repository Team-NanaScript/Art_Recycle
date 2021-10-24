import mongoose from "mongoose";
import board from "../models/board.js";

const Schema = mongoose.Schema;

const reply = Schema({
  r_bId: { type: mongoose.SchemaTypes.ObjectId, ref: "board" },
  r_writer: String,
  r_content: String,
  r_date: String,
  r_time: String,
});

export default mongoose.model("reply", reply);
