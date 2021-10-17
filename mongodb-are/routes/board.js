import express from "express";

const router = express.Router();

router.post("/board", (req, res) => {
  //   const { c_no, c_date, c_time, c_text } = req.body;

  //   console.log("req.body", c_no, c_date, c_time, c_text);

  //   const boardVO = new board(req.body);
  //   boardVO.save((err, data) => {
  //     res.json(data);
  //   });

  console.log("body", req.body);
});

export default router;
