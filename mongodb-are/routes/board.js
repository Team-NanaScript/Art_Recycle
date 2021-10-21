import express from "express";
import board from "../models/board.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  console.log("우쒸");
  console.log(req.body);
  board.create(req.body);

  res.json("INSERT SUCCESS");
});

export default router;
