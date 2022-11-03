const jwt = require('jsonwebtoken'); //--Importe JSONWEBTOKEN


//---Exports middleware that can verify the TOKEN of users
module.exports = (req, res, next) => {
    //--Collect token
    try {
        //---Receve the headers
        const token = req.headers.authorization.split(' ')[1];
        //---Decode the token
        const decodeToken = jwt.verify(token, 'RENDOM_TOKEN_SECRET');
        //---Collect userId
        const userId = decodeToken.userId;
        //---Add the userId
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        res.status(401).json({ error });
    }
} 