const express = require('express'); //----Importer Express to create the route
const router = express.Router(); //---Create router
const auth = require('../middleware/auth'); //----Importe auth
const multer = require('../middleware/multer-config'); //---Import multer
const saucesStuff = require('../controllers/sauces');//---Importe user controllers


//---Create routes GET
router.get('/sauces', multer, saucesStuff.sauces);

//----Exports router
module.exports = router;