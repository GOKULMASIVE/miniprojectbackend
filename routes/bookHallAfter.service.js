import { client } from "../index.js";

export async function createHallAfterBookingData(data) {
  return await client
    .db("BookingDetails")
    .collection("halldetails")
    .insertOne(data);
}

export async function getAllHallAfterBookingData() {
  return await client
    .db("BookingDetails")
    .collection("halldetails")
    .find()
    .toArray();
}
