const mongoose = require('mongoose');

  const mageSchema = new mongoose.Schema({ 
    lone_reg: { 
        type: String, 
        unique:true, 
        require: true
    },
    Total_Amount: { 
        type: Number, 
        require: true
    },
    one_Month_vatti: { 
        type: Number, 
        require: true
    },
    total_vatti: { 
        type: Number, 
        require: true
    },
    Vatti_Asal_Total : { 
        type: Number, 
        require: true
    },
    one_Month_Emi:{
        type:Number,
        require:true
    },
    date : {
        type: Date,
        default:Date.now(toString)
    },
}) 


const Oneloan = mongoose.model("loan_inf", mageSchema);
module.exports = { Oneloan }





