const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    //to be calculated in controller
    age:{
        type:Number,
        required:true
    }
})
const Student=mongoose.model("studentModel",studentSchema);
module.exports=Student;