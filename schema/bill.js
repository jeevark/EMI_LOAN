const mongoose = require('mongoose');

  const mageSchema = new mongoose.Schema({ 
    lone_reg: { 
        type: String,
        required: true
    },
    Emi_amount: { 
        type: Number, 
        require: true
    },
    Emi_paymentDate : { 
        type: Number, 
        require: true
    },
    Emi_deposit:{
        type:Number,
        require:true
    },
    deposit_status:{
        type:String,
        require:true
    },
    date : {
        type: Date,
        default:Date.now(toString)
    },
}) 


const Bill = mongoose.model("bill", mageSchema);
module.exports = { Bill }





