import express from "express";
import board from "../models/board.js";

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

  console.log("seq", b_seq);
  const detail_list = await board.findOne({ b_seq: b_seq });
  res.json(detail_list);
  // , (err, data) => {
  //     console.log("이름", data);
  //     // return JSON.parse(JSON.stringify(data));
  //     // return data;
  //   res.json(data);
  // });
});

export default router;
