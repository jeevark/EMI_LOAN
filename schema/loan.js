const mongoose = require('mongoose');

  const mageSchema = new mongoose.Schema({ 
    customer_id: { 
        type: String,
        unique:true, 
        required: true
    },
    Total_Amount: { 
        type: Number, 
        require: true
    },
    Vatti_percentage : { 
        type: Number, 
        require: true
    },
    EMI_Month:{
        type:Number,
        require:true
    },
    lone_reg:{
        type:String,
        require:true
    },
    date : {
        type: Date,
        default:Date.now(toString)
    },
}) 


const Module = mongoose.model("loan", mageSchema);
module.exports = { Module }





