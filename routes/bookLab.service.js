import { client } from "../index.js";


export async function createLabBookingData(data){
    return await client.db("BookingDetails").collection("labdetails").insertOne(data);
}

export async function getAllLabBookingData(){
    return await client.db("BookingDetails").collection("labdetails").find().toArray();
}