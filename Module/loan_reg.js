const {Module} = require('../schema/loan')
const {Oneloan} = require('../schema/lonecustomer_loan')

const loan = {
        Register:async(req,res)=>{
            try {
                const loan_inf = {
                    customer_id       : req.body.customer_id,
                    Total_Amount      : req.body.Total_Amount,
                    Vatti_percentage  : req.body.Vatti_percentage,
                    EMI_Month         : req.body.EMI_Month,
                    lone_reg          : req.body.lone_reg
                }
    
                   const one_vatti = (loan_inf.Vatti_percentage/100)*loan_inf.Total_Amount;
                   const total_vatti = one_vatti*loan_inf.EMI_Month;
                   const emiamout =total_vatti+loan_inf.Total_Amount;
                   const one_emi =  parseInt(emiamout/loan_inf.EMI_Month);


                   const cu_loan ={
                        lone_reg          : req.body.lone_reg,
                        Total_Amount      : req.body.Total_Amount,
                        one_Month_vatti   : one_vatti,
                        total_vatti       : total_vatti,
                        Vatti_Asal_Total  : emiamout,
                        one_Month_Emi     : one_emi
                }
    
                //    console.log("oneMonth_vatti : "+one_vatti);
                //    console.log("total_vatti : "+total_vatti);
                //    console.log("TotalAmout : "+emiamout);
                //    console.log("one_emi : "+one_emi)

                        console.log(loan_inf);
                        console.log(cu_loan);

                        const results = await Module.create(loan_inf);
                        await Oneloan.create(cu_loan);

                res.status(200).json({result:cu_loan});
                
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
        getloan_deti: async(req,res)=>{

            const results = await Module.find()
            res.status(200).json({status:200,result:results});
        },
        getoneloan: async(req,res)=>{

            const results = await Oneloan.find()
            res.status(200).json({status:200,result:results});
        },
}

module.exports = loan;