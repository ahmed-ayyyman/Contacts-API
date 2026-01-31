const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;

    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        try {
            token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded.user; // attach user info to req
            next();
        } catch (err) {
            res.status(401);
            throw new Error('User is not authorized or token is invalid');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('User is not authorized or token is missing');
    }
});

module.exports = validateToken;
