const jwt = require('jsonwebtoken');
const util = require('util');
const promisify = util.promisify;

const authConfig = require('../config/auth');

module.exports = async (req, res, next) => {
    const userId = req.headers.authorization;
    if(!userId){
        return res.status(401).json({ error: 'Usuario não logado!' });
    }
    
    const [, token] = userId.split(' ');


    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token invalido' });
    }
}