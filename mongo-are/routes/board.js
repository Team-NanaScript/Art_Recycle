import express from "express";
import board from "../models/board.js";
import reply from "../models/commuReply.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  board.create(req.body);

  res.json("INSERT SUCCESS");
});

router.get("/list", async (req, res) => {
  const result = await board.find({});

  await res.json(result);
});

/*
router.get("/detail/:b_seq", (req, res) => {
  const { b_seq } = req.params;

  console.log("seq", b_seq);
  const detail_list = board.findOne({ b_seq: b_seq }, (err, data) => {
    //     console.log("이름", data);
    //     // return JSON.parse(JSON.stringify(data));
    //     // return data;
    res.json(data);
  });
});
*/

router.get("/detail/:b_seq", async (req, res) => {
  const { b_seq } = req.params;

  // console.log("seq", b_seq);
  const detail_list = await board.findOne({ b_seq: b_seq });
  // .populate({ model: reply });
  //   res.json(detail_list);

  //   const result = await board.findOne({
  //     where: { b_seq },
  //     include: { model: reply },
  //   });
  // console.log(detail_list);
  res.json(detail_list);
});

router.post("/update/:b_seq", async (req, res) => {
  const { b_seq } = req.params;
  const result = await board.updateOne({ b_seq: b_seq });
  // console.log("result", result);
  await res.json(result);
});

router.get("/delete/:b_seq", (req, res) => {
  const { b_seq } = req.params;
  const result = board.deleteOne({ b_seq: b_seq });
  res.json(result);
});

router.post("/reply/:b_seq", async (req, res) => {
  const { b_seq } = req.params;
  // console.log("b_seq", b_seq);

  await reply.create(req.body);
  //   res.json("댓글 등록 완료!!!");

  const detail_list = await reply.find({ r_bSeq: b_seq });
  res.json(detail_list);
});

router.get("/reply/detail/:b_seq", async (req, res) => {
  const { b_seq } = req.params;

  const detail_list = await reply.find({ r_bSeq: b_seq });

  res.json(detail_list);
});

/*
router.get("/reply/update/:r_Id", (req, res) => {
  const { r_Id } = req.params;
  const result = reply.findOne({ r_Id: r_Id });

  res.json(result);
});
*/

router.post("/reply/update/:r_Id", (req, res) => {
  const { r_Id } = req.params;
  //   const result = reply.findOne({ r_Id: r_Id });
  const result = reply.updateMany(req.body, { where: r_Id });

  res.json(result);
});

router.get("/reply/delete/:b_seq/:r_Id", async (req, res) => {
  const { b_seq, r_Id } = req.params;
  // console.log("r_Id", r_Id);

  await reply.deleteOne({ r_Id: r_Id });

  const detail_list = await reply.find({ r_bSeq: b_seq });
  res.json(detail_list);

  //   await res.json("삭제 완료!");
});

export default router;
