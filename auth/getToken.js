const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js')


function getToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    };
    const options = {
        expiresIn: '10d'
    };
    return jwt.sign(payload, process.env.SECRET || 'Is it secret? Is it safe?', options)
}

module.export = getToken;