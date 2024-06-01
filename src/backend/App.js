const express=require("express");
const app=express();
const port=process.env.PORT||8000;
require("./db/connection")
const creds=require("../backend/models/loginreqs")
app.use(express.json())
app.post("/data",async (req,res)=>{
    try{
        const users=new creds(req.body)
        users.save().then(()=>{
            res.send(users);
        }).catch((err)=>{
            res.send(err);
        });
    }
    catch(e){
        res.status(400).send(e);
    }
   
})
app.get("/",(req,res)=>{
    res.send("Hey there")
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
