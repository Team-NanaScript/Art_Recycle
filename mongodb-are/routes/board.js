import express from "express";
import board from "../models/board.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  board.create(req.body);
  res.json("INSERT SUCCESS");
});

export default router;
