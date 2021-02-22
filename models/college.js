const mongoose=require('mongoose')
const validator=require('validator')

const collegeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    Year_founded:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    no_of_stud:{
        type:String,
        required:true
    },
    courses:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
})
const College=mongoose.model('College',collegeSchema)

module.exports=College
