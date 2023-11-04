import express from "express";
import { ObjectId } from "mongodb";
import {
  getAllLabBookingData,
  createLabBookingData,
  deleteLabBooking
} from "./bookLab.service.js";

const router = express.Router();

// GET the data

router.get("/", async function (req, res) {
  const data = await getAllLabBookingData();
  res.send(data);
});



router.post("/", async function (req, res) {
  const data = req.body;
  const result = await createLabBookingData(data);
  res.send(result);
});

router.delete("/", async function (req, res) {
  const result = await deleteLabBooking();
  res.send(result);
});
export default router;
