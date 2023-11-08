import { client } from "../index.js";

import bcrypt from "bcrypt";

async function getHashPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashPass = await bcrypt.hash(password, salt);
  return hashPass;
}

export async function userSignup(data) {
  // console.log("data:", data);
  const { userName, password, Email } = data;
  const pass = await getHashPassword(password);
  return await client
    .db("BookingDetails")
    .collection("admin")
    .insertOne({ userName, Email, password: pass });
}

export async function getUserByEmail(mail) {
  return await client
    .db("BookingDetails")
    .collection("admin")
    .findOne({ Email: mail });
}

export async function getUsers() {
  return await client.db("BookingDetails").collection("admin").find().toArray();
}

export async function DeleteAll() {
  return await client.db("BookingDetails").collection("admin").deleteMany();
}

export async function updateAdmin(id, data) {
  return await client
    .db("BookingDetails")
    .collection("admin")
    .updateOne({Email: id }, { $set: data });
}