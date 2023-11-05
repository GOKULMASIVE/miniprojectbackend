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
  const { userName, password ,Email} = data;
  const pass = await getHashPassword(password);
  return await client.db("BookingDetails").collection("users").insertOne({ userName, Email,password:pass });
}

export async function getUserByEmail(mail) {
  return await client.db("BookingDetails").collection("users").findOne({ Email: mail });
}

export async function getUsers() {

  return await client.db("BookingDetails").collection("users").find().toArray();
}

export async function DeleteAll(){
  return await client.db("BookingDetails").collection("users").deleteMany();
}




