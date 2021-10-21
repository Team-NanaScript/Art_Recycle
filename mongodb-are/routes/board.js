import express from "express";
import board from "../models/board.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  console.log("우쒸");
  console.log(req.body);
  board.create(req.body);

  res.json("INSERT SUCCESS");
});

router.get("/list", async (req, res) => {
  console.log("HI!");

  console.log("find", board.find({}));

  const result = await board.find({});
  console.log("result", result);

  await res.json(result);
});

export default router;
