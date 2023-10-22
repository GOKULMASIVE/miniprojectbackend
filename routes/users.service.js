import { client } from "../index.js";

import bcrypt from "bcrypt";

 async function getHashPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashPass = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashPass);
  return hashPass;
}

export async function userSignup(data) {
  // console.log("data:", data);
  const { userName, password } = data;
  const pass = await getHashPassword(password);
  return await client.db("BookingDetails").collection("users").insertOne({ userName, password:pass });
}

export async function getUserByName(userName) {
  return await client.db("BookingDetails").collection("users").findOne({ userName: userName });
}

export async function getUsers() {

  return await client.db("BookingDetails").collection("users").find().toArray();
}





