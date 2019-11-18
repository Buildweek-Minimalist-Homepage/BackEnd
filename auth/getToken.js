const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js')

function getToken(email) {
    const payload = {
        email
    };
    secret

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secret, options)
}

module.export = getToken;