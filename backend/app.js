//------Importe express
const express = require('express');
const cors = require('cors'); //---Importe cors

//----Importe mongoose
const mongoose = require('mongoose');//---Import Mongoose
const saucesRoutes = require('./routes/sauces'); //---Import saucesRoutes
const userRoutes = require('./routes/user'); //---Importe user routes


//---Create an application (app)
const app = express();
app.use(express.json());
app.use(cors());


//---Connect to mongoose
mongoose.connect('mongodb+srv://Mongo:Gevon2222@cluster0.2qhm2ep.mongodb.net/?retryWrites=true&w=majority',
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
  

app.use('/api', saucesRoutes);
app.use('/api/auth', userRoutes);


//---Exports the application
module.exports = app;