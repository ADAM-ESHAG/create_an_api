const jwt = require('jsonwebtoken'); //--Importe JSONWEBTOKEN
const dotenv = require('dotenv');


//---Exports middleware that can verify the TOKEN of users
module.exports = (req, res, next) => {
    //--Collect token
    try {
        //---Receve the headers
        const token = req.headers.authorization.split(' ')[1];
        //---Decode the token
        const decodeToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        //---Collect userId Of DecodeToken
        const userId = decodeToken.userId;
        
        req.auth = {
            userId: userId
        };
        next();
        
    } catch(error) {
        res.status(401).json({ message: "Auth non valide" });
    }
} 