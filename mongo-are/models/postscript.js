import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postscript = Schema({
  p_Id: { type: Schema.Types.ObjectId, model: "atelier" },
  p_ateId: String,
  p_date: String,
  p_time: String,
  p_writer: String,
  p_content: String,
});

export default mongoose.model("postscript", postscript);
