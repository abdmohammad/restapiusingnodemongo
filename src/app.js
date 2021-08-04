const express=require('express');
const Student = require('./models/students');

//const bodyParser=require('body-parser');

require("./db/conn");
require("./models/students");

const app=express();


const port=process.env.PORT || 8000;

app.use(express.json());

//app.use(bodyParser.urlencoded());


app.post("/studnets",(req,res)=>{

    console.log(req.body);
    const user=new Student(req.body);

    user.save().then(()=>{

          res.status(201).send(user); 
        //  console.log(user);
    }).catch((e)=>{
    
        res.status(400).send(e); 

    })
   // res.send("Welcome students page");

})


app.listen(port,(req,res)=>{

    console.log(`connection is setip at localhost:${port}`);

})