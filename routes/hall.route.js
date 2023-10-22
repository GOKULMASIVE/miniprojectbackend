import express from "express";
import { ObjectId } from "mongodb";
import { getAllHallData, getHallDataById, createHallData } from "./hall.service.js";

const router = express.Router();

// GET the data

router.get("/", async function (req, res) {
  const data = await getAllHallData();
  console.log(data);
  res.send(data);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const result = await getHallDataById(new ObjectId(id));

  res.send(result);
});

router.post("/", async function (req, res) {
  const data = req.body;
  const result = await createHallData(data);
  res.send(result);
});

export default router;
