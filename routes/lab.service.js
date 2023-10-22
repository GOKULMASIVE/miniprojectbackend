import { client } from "../index.js";

export async function getAllLabData() {
  return await client.db("miniProject").collection("labData").find().toArray();
}

export async function getLabDataById(id) {
    return await client.db("miniProject").collection("labData").findOne({_id:id});
}

export async function createLabData(data){
    return await client.db("miniProject").collection("labData").insertMany(data);
}