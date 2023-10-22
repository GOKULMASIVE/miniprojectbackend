import express from 'express';
import { ObjectId } from 'mongodb';
import { getAllLabData, getLabDataById, createLabData } from "./lab.service.js";



const router=express.Router();

// GET the data

router.get("/",async function(req,res){
    const data=await getAllLabData();
    console.log(data);
    res.send(data)
})

router.get("/:id",async function(req,res){
    const {id}=req.params;
    const result=await getLabDataById(new ObjectId(id))

    res.send(result);

})

router.post("/",async function(req,res){
    const data=req.body;
    const result=await createLabData(data);
    res.send(result);
})



export default router;