const express = require('express'); //----Importer Express to create the route
const router = express.Router(); //---Create router
const auth = require('../middleware/auth'); //----Importe auth
const multer = require('../middleware/multer-config'); //---Import multer.js
const saucesStuff = require('../controllers/sauces');//---Import ontrollers sauces.js
const likes = require('../controllers/likes'); //---Import controllers likes.js


//---Create routes POST and GET
router.post('/sauces', auth, multer, saucesStuff.SaucesThing); //---POST Sauces
router.put('/sauces/:id', auth, multer, saucesStuff.modifiySauce) //---Route PUT to modifiy a sauce
router.delete('/sauces/:id', auth, multer, saucesStuff.deleteSauce) //---Route DELETE to delete a sauce
router.post('/sauces/:id/like', auth, likes.sauceLikes); //---Route POST to like or dislike a sauce
router.get('/sauces', auth, multer, saucesStuff.getSauces);//---GET Sauces
router.get('/sauces/:id', auth, multer, saucesStuff.getSingleSauce); //--GET Single Sauce



//----Exports router
module.exports = router;