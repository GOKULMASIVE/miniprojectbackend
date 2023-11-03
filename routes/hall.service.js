import { client } from "../index.js";

export async function getAllHallData() {
  return await client.db("miniProject").collection("hallData").find().toArray();
}

export async function getHallDataById(id) {
  return await client
    .db("miniProject")
    .collection("hallData")
    .findOne({ _id: id });
}

export async function createHallData(data) {
  return await client.db("miniProject").collection("hallData").insertMany(data);
}

export async function DeleteAll() {
  return await client.db("miniProject").collection("hallData").deleteMany();
}

export async function updateHall(id,data){
  return await client.db("miniProject").collection("hallData").updateOne({_id:id},{$set:data});
}