import express from "express";
import bcrypt from "bcrypt";
import { userSignup, getUsers, getUserByEmail ,DeleteAll} from "./users.service.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async function (req, res) {
  const { Email,userName, password } = req.body;
  const user = await getUserByEmail(Email);
  
  if (user) {
    res.status(400).send({ message: "This email is already Exist" });
  } else if (password.length < 8 && password.length<12) {
    res.status(400).send({ Message: "Password must be above 8 character " });
  } else {
    const result = await userSignup({ userName, Email,password });
    res.send(result); 
  }
});

router.post("/login", async function (req, res) {
  const { Email,password } = req.body;
  const user = await getUserByEmail(Email);
  console.log(user);
  if (user) {
    const storedPassword = user.password;
    const isPaswwordMatch = await bcrypt.compare(password, storedPassword);
    isPaswwordMatch
      ? res.status(200).send("Loging successfully")
      : res.status(401).send("Invalid user");   
  }else{
    res.status(400).send("Invalid user")
  }
});   

router.get("/", async function (req, res) {
  // console.log(req.query);
  const result = await getUsers();
  res.send(result);
});

router.delete("/",async function (req,res){
  const result=await DeleteAll();
  res.send(result)
})


export default router;
