import express from "express";
import { ObjectId } from "mongodb";
import {
  getAllHallBookingData,
  createHallBookingData,
} from "./bookHall.service.js";

const router = express.Router();

// GET the data

router.get("/", async function (req, res) {
  const data = await getAllHallBookingData();
  res.send(data);
});

router.post("/", async function (req, res) {
  const data = req.body;
  const result = await createHallBookingData(data);
  res.send(result);
});

export default router;
