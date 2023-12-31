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

export async function DeleteAll(){
  return await client.db("miniProject").collection("labData").deleteMany();
}

export async function updateLab(id, data) {
  return await client
    .db("miniProject")
    .collection("labData")
    .updateOne({ _id: id }, { $set: data });
}