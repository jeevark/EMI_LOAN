const{ Collection } =require('../schema/customer')


const customer ={
signup: async(req,res)=>{
    try {
        const value ={
            Full_Name       : req.body.Full_Name,
            Gender          : req.body.Gender,
            Aadhar_No       : req.body.Aadhar_No,
            Address         : req.body.Address,
            Mobile_number   : req.body.Mobile_number,
            Phone_number    : req.body.Phone_number,
            E_mail          : req.body.E_mail,
            gover_private   : req.body.gover_private,
            Office_Address  : req.body.Office_Address,
            Reference       : req.body.Reference
        }
            console.log(value);
            const results = await Collection.create(value);
                res.status(200).json({status:200,result:results});
 } catch (error) {
    console.error('Error creating user:', error);
    if (error.code === 11000) {
        // Duplicate key violation error
        res.status(409).json({
            error: 'Duplicate key error'
        });
    } else {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }}
},
getcustmoer:async(req,res)=>{

    const results = await Collection.find()
    res.status(200).json({status:200,result:results});
},


};
module.exports = customer;