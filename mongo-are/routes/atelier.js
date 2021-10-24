import express from "express";
import atelier from "../models/atelier.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  atelier.create(req.body);

  res.json("INSERT SUCCESS");
});

export default router;
