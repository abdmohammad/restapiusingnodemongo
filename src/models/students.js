const mongoose=require("mongoose");
const validator = require("validator");

const studentSchema=new mongoose.Schema({

      name:{
          type:String,
          required:true,
          minlenght:3
      },
      email:{
          type:String,
          required:true,
          unique:[true,"Email Required"],
           validate(value){
              if(!validator.isEmail(value)){
                 Error("Email is not valid");
              }
          }

      },
      phone:{
          type:Number,
          required:true,
          unique:true
          // min:10,
         // max:11

      },
      address:{
          type:String,
          required:true
      }

})



const Student = new mongoose.model('Student',studentSchema);



module.exports=Student;