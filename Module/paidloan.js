const {Oneloan} = require('../schema/lonecustomer_loan')

const paid ={
    paid:async(req,res)=>{
        try {
            const paid_detail ={
                lone_reg : req.body.lone_reg,
                Emi_amount : req.body.Emi_amount
        }
         const results = await Oneloan.findOne({lone_reg:paid_detail.lone_reg});
         console.log(results.date+"   "+ parseInt(results.one_Month_Emi))
             res.status(200).send({result:results});
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = paid;