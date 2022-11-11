const   Sauces = require('../models/Sauces'); //---Importe models Sauces



/*-------- Exports sauceLikes --------*/
exports.sauceLikes = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id})
  .then(sauce => {
    //---Use methode JavaScript Includes()
    //---likes = 1 
    //---If userId that he likes dose not in usersLiked and likes === 1 ---/
    if(!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1){
        /*---Soo update likes and usersLiked ---*/
        Sauces.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: 1},
            $push: { usersLiked: req.body.userId}
          }
        ).then(() => res.status(201).json({ message: "Sauces likes +1"}))
        .catch((error) => res.status(400).json({ error}));
    }

    /**---If userId that he likes excit in usersLiked, 
    then update likes to 0 and delete userId from usersLiked ---*/
    else if(sauce.usersLiked.includes(req.body.userId) && req.body.like === 0){
      /*---Soo update likes and usersLiked ---*/
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { likes: -1},
          $pull: { usersLiked: req.body.userId}
        }
      ).then(() => res.status(201).json({ message: "Sauces likes -1"}))
      .catch((error) => res.status(400).json({ error}));
  }
  

  /**---If userId that dislikes are not on usersDesLiked, 
    then update dislikes to 1 and push userId to usersDisliked ---*/
    else if(!sauce.usersDisliked.includes(req.body.userId) && req.body.like === -1){
      /*---Soo update likes and usersLiked ---*/
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { dislikes: 1},
          $push: { usersDisliked: req.body.userId}
        }
      ).then(() => res.status(201).json({ message: "Sauces Dislikes +1"}))
      .catch((error) => res.status(400).json({ error}));
    }

    /**---If userId that dislikes are on usersDesLiked, 
    then update dislikes to -1 and pull userId from usersDisliked ---*/
    else if(sauce.usersDisliked.includes(req.body.userId) && req.body.like === 0){
      /*---Soo update likes and usersLiked ---*/
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { dislikes: -1},
          $pull: { usersDisliked: req.body.userId}
        }
      ).then(() => res.status(201).json({ message: "Sauces Dislikes -1"}))
      .catch((error) => res.status(400).json({ error}));
    }
  })
  .catch(error => res.status(404).json({ error }));
};