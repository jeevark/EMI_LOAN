const mongoose = require('mongoose');
const date = new Date().toLocaleDateString();

  const mageSchema = new mongoose.Schema({ 
    Full_Name: { 
        type: String, 
        require: true
    },
    Gender: { 
        type: String, 
        require: true
    }, 
    Aadhar_No: { 
        type: String, 
        unique:true, 
        require: true
    },
    Address: { 
        type: String, 
        require: true
    }, 
    Mobile_number: { 
        type: String, 
        require: true
    }, 
    Phone_number: { 
        type: String, 
        require: true
    },
    E_mail: { 
        type: String, 
        unique:true, 
        require: true
    },
    gover_private :{ 
        type: String, 
        require: true
    },
    Office_Address: { 
        type: String, 
        require: true
    },
    Reference: { 
        type: String, 
        require: true
    },
    date : {
        type: Date,
        default:Date.now(toString)
    },
}) 


const Collection = mongoose.model("customer", mageSchema);
module.exports = { Collection }





