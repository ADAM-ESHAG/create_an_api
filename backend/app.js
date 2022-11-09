//------Importe express
const express = require('express');
const cors = require('cors'); //---Importe cors
const path = require('path');



//----Importe mongoose
const mongoose = require('mongoose');//---Import Mongoose
const saucesRoutes = require('./routes/sauces'); //---Import saucesRoutes
const userRoutes = require('./routes/user'); //---Importe user routes


const app = express(); //---Create an application (app)
app.use(express.json());
app.use(cors());



//---This is the way how we connect to mongoose
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
  

app.use('/api', saucesRoutes); //---app.use Sauces routes
app.use('/api/auth', userRoutes);//---app.use Users routes
app.use('/images', express.static(path.join(__dirname, 'images')));


//---Exports the application
module.exports = app;