const mongoose=require('mongoose')
const validator=require('validator')

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    Year_batch:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    college_id:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
})
const Student=mongoose.model('Student',studentSchema)

module.exports=Student
