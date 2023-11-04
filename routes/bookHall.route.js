import express from "express";
import { ObjectId } from "mongodb";
import {
  getAllHallBookingData,
  createHallBookingData,
  getHallBookingById,
  deleteHallBooking
} from "./bookHall.service.js";

const router = express.Router();

// GET the data

router.get("/", async function (req, res) {
  
  const data = await getAllHallBookingData();
  res.send(data);
});

router.get("/:id", async function (req, res) {
  const {id}=req.params
  const data = await getHallBookingById(new ObjectId(id));
  res.send(data);
});

router.post("/", async function (req, res) {
  const data = req.body;
  const result = await createHallBookingData(data);
  res.send(result);
});

router.delete("/",async function(req,res){
  const result=await deleteHallBooking();
  res.send(result);
})
export default router;
