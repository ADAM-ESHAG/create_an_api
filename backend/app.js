//------Importe express
const express = require('express');
const cors = require('cors'); //---Importe cors

//----Importe mongoose
const mongoose = require('mongoose');
const saucesRoutes = require('./routes/sauces')
const userRoutes = require('./routes/user'); //---Importe user routes
const { json } = require('express');

//---Create an application (app)
const app = express();
app.use(cors());


//---Connect to mongoose
mongoose.connect('mongodb+srv://<userName>:<password>cluster0.2qhm2ep.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
//-----Headers-----
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
  
app.use(express.json()); 
//---Create app.use
// app.use((req, res, next) => {
//     res.json({message: 'We have a new route !'});
//     next();
// });
app.use('/api', saucesRoutes);
app.use('/api/auth', userRoutes);


//---Exports the application
module.exports = app;