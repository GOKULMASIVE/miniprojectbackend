import { client } from "../index.js";


export async function createLabBookingData(data){
    return await client.db("BookingDetails").collection("labdetails").insertOne(data);
}

export async function getAllLabBookingData(){
    return await client.db("BookingDetails").collection("labdetails").find().toArray();
}

export async function deleteLabBooking() {
  return await client
    .db("BookingDetails")
    .collection("labdetails")
    .deleteMany();
}

export async function DeleteLab(id) {
  return await client.db("BookingDetails").collection("labdetails").deleteOne({ _id: id });
}
