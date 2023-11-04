import { client } from "../index.js";

export async function createHallBookingData(data) {
  return await client
    .db("BookingDetails")
    .collection("halldetails")
    .insertOne(data);
}

export async function getAllHallBookingData() {
  return await client
    .db("BookingDetails")
    .collection("halldetails")
    .find().toArray()
   
}

export async function getHallBookingById(id) {
  return await client
    .db("BookingDetails")
    .collection("halldetails")
    .findOne({ _id: id });
}

export async function deleteHallBooking(){
  return await client.db("BookingDetails").collection("halldetails").deleteMany();
}

