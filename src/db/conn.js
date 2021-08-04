const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/studnets-api",{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true

}).then(()=>{
console.log("connection succful");

}).catch((e)=>{
console.log('connection failed');
})