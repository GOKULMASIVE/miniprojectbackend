import express from "express"
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
import cors from 'cors'
import labRouter from './routes/lab.route.js'
import userRouter from './routes/users.route.js'
import BookinglabRouter from './routes/bookLab.route.js';
import hallRouter from './routes/hall.route.js';
import BookinghallRouter from './routes/bookHall.route.js';
import HallAfterRouter from './routes/bookHallAfter.route.js'
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;

export const client=new MongoClient(MONGO_URL);

await client.connect();
console.log("MongoDB is connected");

app.use(express.json())
app.use(cors());


app.get("/", function (request, response) {
  response.send("");
});

// app.use("/hall",);
app.use('/lab',labRouter);
app.use("/hall",hallRouter);
app.use("/users",userRouter);
app.use("/bookingLab",BookinglabRouter);
app.use("/bookinghall",BookinghallRouter)


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));