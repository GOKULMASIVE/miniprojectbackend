import express from 'express';
import { ObjectId } from 'mongodb';
import { getAllLabData, getLabDataById, createLabData ,DeleteAll,updateLab} from "./lab.service.js";



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

router.delete("/",async function(req,res){
    const del=await DeleteAll();
    res.send(del);
})

router.put("/:id", async function (req, res) {
  const { id } = req.params;
  console.log(id);
  const data = req.body;
  const obj_id = new ObjectId(id);
  const result = await updateLab(obj_id, data);
  res.send(result);
});



export default router;