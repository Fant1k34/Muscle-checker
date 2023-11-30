const fs = require('fs');
const jwt = require('jsonwebtoken');
const generateToken = (apiConfig, userId) => {
    const jwt = require('jsonwebtoken');
    const fs = require('fs');

    const privateKey = fs.readFileSync('./config/login-private.key');

    return jwt.sign(
        {
            userId,
            exp: Date.now() + apiConfig.services.login.maxLoginTimeMillisec,
        },
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

    if (decoded && decoded.exp) {
        const validUntil = decoded.exp - 0;
        console.log(validUntil);

        if (!isNaN(validUntil) && Date.now() < validUntil) {
            return true;
        }
    }

    return false;
};

const getDataFromToken = (token) => {
    const jwt = require('jsonwebtoken');
    const fs = require('fs');

    const privateKey = fs.readFileSync('./config/login-private.key');

    return jwt.verify(token, privateKey);
};

module.exports = { generateToken, verifyToken, getDataFromToken };
