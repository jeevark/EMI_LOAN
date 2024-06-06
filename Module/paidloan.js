const {Oneloan} = require('../schema/lonecustomer_loan')
const {Bill} = require('../schema/bill')

const paid ={
    paid:async(req,res)=>{
        try {
            const paid_detail ={
                lone_reg : req.body.lone_reg,
                Emi_amount : req.body.Emi_amount
        }
         const results = await Oneloan.findOne({lone_reg:paid_detail.lone_reg});  
         //console.log(results.date+"   "+ parseInt(results.one_Month_Emi))
         const bill ={
                lone_reg : paid_detail.lone_reg,
                Emi_amount : results.one_Month_Emi,
                Emi_paymentDate   : results.date,                       
                Emi_deposit : paid_detail.Emi_amount,
                deposit_status : "Paymentpaid"
         }
         if(paid_detail.Emi_amount!==results.one_Month_Emi){
                bill.deposit_status = "part"
                const value = await Bill.create(bill);  
                res.status(200).send({result:value});
         }
         const value = await Bill.create(bill); 
             res.status(200).send({result:value});
        } catch (error) {
            res.send(error);
        }
    },
 getpayment: async(req,res)=>{

    const results = await Bill.find()
    res.status(200).json({status:200,result:results});
},
}
 
module.exports = paid;