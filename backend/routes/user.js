
const express = require('express'); //----Importer Express to create the route
const router = express.Router(); //---Create router
const auth = require('../middleware/auth'); //----Importe auth
const userCtrl = require('../controllers/user');//---Importe user controllers


//-----Create routes POST
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);




//----Exports router
module.exports = router;
