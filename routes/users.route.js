import express from "express";
import bcrypt from "bcrypt";
import { userSignup, getUsers, getUserByName } from "./users.service.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async function (req, res) {
  const { userName, password } = req.body;
  const user = await getUserByName(userName);
  
  if (user) {
    res.status(400).send({ message: "This name is already Exist" });
  } else if (password.length < 8 && password.length<12) {
    res.status(400).send({ Message: "Password must be above 8 character " });
  } else {
    const result = await userSignup({ userName, password });
    res.send(result);
  }
});

router.post("/login", async function (req, res) {
  const { userName, password } = req.body;
  const user = await getUserByName(userName);
  if (user) {
    const storedPassword = user.password;
    const isPaswwordMatch = await bcrypt.compare(password, storedPassword);
    isPaswwordMatch?res.send("Login Successfully"):res.send("Invalid user");
  }
}); 

router.get("/", async function (req, res) {
  // console.log(req.query);
  const result = await getUsers();
  res.send(result);
});


export default router;
