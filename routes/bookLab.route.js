import express from "express";
import { ObjectId } from "mongodb";
import {
  getAllLabBookingData,
  createLabBookingData,
  deleteLabBooking,
  DeleteLab
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

router.delete(`/:id`, async function (request, response) {
  const { id } = request.params;
  const new_id=new ObjectId(id);
  const deleteLab = await DeleteLab(new_id);

  response.send(deleteLab)
});
export default router;
