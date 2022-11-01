const express = require('express'); //----Importer Express to create the route
const router = express.Router(); //---Create router
const saucesStuff = require('../controllers/sauces');//---Importe user controllers


//---Create routes GET
router.get('/sauces', saucesStuff.sauces);

//----Exports router
module.exports = router;