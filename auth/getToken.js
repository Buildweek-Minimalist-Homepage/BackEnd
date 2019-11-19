const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js')

// function getToken(email) {
//     const payload = {
//         email
//     };
//     secret

//     const options = {
//         expiresIn: '1d'
//     };

//     return jwt.sign(payload, secret, options)
// }

function getToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, process.env.SECRET || 'Is it secret? Is it safe?', options)
}

module.export = getToken;