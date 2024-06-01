const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/loginreq",{
    useNewUrlParser:true,
    UseUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDb Connected");
}).catch((e)=>{
    console.log(e);
})