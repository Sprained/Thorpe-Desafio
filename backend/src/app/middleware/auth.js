module.exports = (req, res, next) => {
    const userId = req.headers.userid;
    if(!userId){
        return res.status(401).json({ error: 'Usuario não logado!' });
    }
    
    req.userId = req.headers.userid;
    
    return next();
}