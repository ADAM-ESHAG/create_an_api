const   bcrypt = require('bcrypt'); //---Importe bcrypt after installed
const   User = require('../models/User'); //---Importe models user
const   jwt = require('jsonwebtoken'); //----Importe JSONWEBTOKEN


//------Declaration of a function signup to save the new users
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'User has been created !' }))
        .catch(error => res.status(400));
    })
    .catch(error => res.status(500).json({ error }));
  };


//---Declaration of a function to login users
exports.login = (req, res, next) => {
    //---Found user
    User.findOne({ email: req.body.email })
    //---Then imply user----
    .then(user => {
        //---If user not exicit in or database
        if(!user){
          return  res.status(401).json({ message: 'Password incorrect'});
        }
        //---Compare the password 
        bcrypt.compare(req.body.password, user.password)
            //---Then check password
            .then(valid => {
                //----If Password invalid
                if(!valid){
                   return res.status(401).json({ message: 'Password incorrect' });
                }
                //--Create a userId and token then send theme to server
                res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                      { userId: user._id },
                      'RANDOM_TOKEN_SECRET',
                      { expiresIn: '12h' }
                    )
                });
            })
            //----Or catch error 500
            .catch(error => res.status(500));
        })
    .catch(error => res.status(500).json({ error }));
};