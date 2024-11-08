const jwt = require('jsonwebtoken');
const User = require('../models/user.model')

const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(403).json({ message: 'Need Token'})
    }
    //obtenemos token del header
    const token = req.headers['authorization']
    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY)
        obj = jwt.decode(token) //decodificamos el token xq adentro tiene datos
    } catch (error) {
        return res.status(403).json({ message: 'Token incorrect'})
    }
    const [users] = await User.selectById(obj.userId)
    req.user = users[0];
    next();
}

module.exports = {
    checkToken
}