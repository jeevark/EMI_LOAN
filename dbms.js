const mongoose = require('mongoose');

const database = 'Kairasi';
// mongodb+srv://admin:admin@cluster0.l2lbhpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect(`mongodb://localhost:27017/${database}`)
  .then(() => console.log('Mongoose is Connected..........!'));
