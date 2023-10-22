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
