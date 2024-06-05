const mongoose = require('mongoose');

const database = 'Kairasi';
// mongodb+srv://admin:admin@cluster0.l2lbhpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect(`mongodb://localhost:27017/${database}`)
  .then(() => console.log('Mongoose is Connected..........!'));



// let P =1000;
// let R =2;
// let T =10;

// const one_vatti = (2/100)*P;
// const total_vatti = one_vatti*T;
// const emiamout =total_vatti+P;
// const one_emi = emiamout/T;

// console.log("oneMonth_vatti : "+one_vatti);
// console.log("total_vatti : "+total_vatti);
// console.log("totalEmiAmout : "+emiamout);
// console.log("one_emi : "+one_emi)