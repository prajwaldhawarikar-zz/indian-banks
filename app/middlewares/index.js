const jwt = require('jsonwebtoken');
const { config } = require('../config');

exports.ensureAuthorizedUser = async function (req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if (!bearerToken) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }
        jwt.verify(bearerToken, config.getSecretKey(),(err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Invalid token',
                });
            } else {
                next()
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }
};