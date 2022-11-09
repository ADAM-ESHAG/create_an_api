const   Sauces = require('../models/Sauces'); //---Importe models Sauces

const fs = require('fs'); //---Importe module fs from NodeJs to access to the image file on our server

//--- Exports SaucesThing
exports.SaucesThing = (req, res, next) => {
  
  const saucesObject = JSON.parse(req.body.sauce);//---Parse req body
  
  const sauces = new Sauces({
    ...saucesObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    
  });
  sauces.save()
  .then(() => res.status(201).json({ message: 'Sauce retrieve'}))
  .catch(error => res.status(400).json({ error }));
  
};

//---Exports getSaucesId
exports.getSingleSauce = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({ error }));
  
};

//----Exports modifiySauce to modifiy a sauce
exports.modifiySauce = (req, res, next) => {

  /*---If there is a file to update in the object, PARSE requette body to get the 
  URL of the new file to update */
  const sauceFileObject = req.file ? {
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } 
    //----If there is no file to update retieve the requette body
    : { ...req.body };

  //---Delete the userId for secure
  delete sauceFileObject._userId;

  /*----  ----*/
  Sauces.findOne({_id: req.params.id})
      .then((sauce) => {
        if (sauce.userId != req.auth.userId) {
          res.status(401).json({ message : 'Not authorized to modifiy this sauce' });
        } else {
          Sauces.updateOne({ _id: req.params.id }, { ...sauceFileObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Sauce has been modifiy !' }))
          .catch(error => res.status(400).json({ error }));
        }
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };

/*-------Exports deleteSauce to delete a Sauce------*/
exports.deleteSauce = (req, res, next) => {
  Sauces.findOne({_id: req.params.id})
  .then(sauce => {
    if(sauce.userId != req.auth.userId) {
      res.status(401).json({ message : 'Not authorized to delete this sauce' });
    } else {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauces.deleteOne({_id: req.params.id})
          .then(() => res.status(200).json({ message: 'Sauce has been delete !' }))
          .catch(error => res.status(400).json({ error }));
      });
    }
  })
};


//---Exports getSauces
exports.getSauces = (req, res, next) => {
  Sauces.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({ error }));
  };

  
  
 