import express from "express";
import { ObjectId } from "mongodb";
import {
  getAllHallBookingData,
  createHallBookingData,
  getHallBookingById,
  deleteHallBooking,
  DeleteHall
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

router.delete(`/:id`, async function (request, response) {
  const { id } = request.params;
  const new_id = new ObjectId(id);
  const deleteLab = await DeleteHall(new_id);

  response.send(deleteLab);
});
export default router;
