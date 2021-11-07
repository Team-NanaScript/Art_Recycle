import express from "express";
import atelier from "../models/atelier.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  atelier.create(req.body);

  res.json("INSERT SUCCESS");
});

router.get("/detail/:at_seq", async (req, res) => {
  const { at_seq } = req.params;

  const result = await atelier.findOne({ at_seq: at_seq });

  console.log("여기는 그.. 아틀리에 디테일입니다.");
  res.json(result);
});

router.post("/update/:b_seq", async (req, res) => {
  const { at_seq } = req.params;
});

export default router;
