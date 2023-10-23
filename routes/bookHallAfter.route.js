import express from "express";

import {
  getAllHallAfterBookingData,
  createHallAfterBookingData,
} from "./bookHallAfter.service.js";

const router = express.Router();

// GET the data

router.get("/", async function (req, res) {
  const data = await getAllHallAfterBookingData();
  res.send(data);
});

router.post("/", async function (req, res) {
  const data = req.body;
  const result = await createHallAfterBookingData(data);
  res.send(result);
});

export default router;
