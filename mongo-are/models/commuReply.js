import mongoose from "mongoose";
import board from "../models/board.js";

const Schema = mongoose.Schema;

const reply = Schema({
  r_Id: { type: Schema.Types.ObjectId, ref: "board" },
  r_bSeq: String,
  r_writer: String,
  r_content: String,
  r_date: String,
  r_time: String,
});

export default mongoose.model("reply", reply);
