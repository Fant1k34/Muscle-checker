const generateToken = (apiConfig, userId) => {
    const jwt = require('jsonwebtoken');
    const fs = require('fs');

    const privateKey = fs.readFileSync('./config/login-private.key');

    return jwt.sign(
        { userId, expireIn: apiConfig.services.login.maxLoginTimeMillisec },
        privateKey,
        { algorithm: 'HS512' }
    );
};

const verifyToken = (token) => {
    const jwt = require('jsonwebtoken');
    const fs = require('fs');

    const privateKey = fs.readFileSync('./config/login-private.key');

    const decoded = jwt.verify(token, privateKey);

    console.log(decoded);
};

module.exports = { generateToken };
