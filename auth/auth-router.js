const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { validateUser } = require('../users/validateUser.js')
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');


router.post('/register', (req, res) => {
    let user = req.body;
    
    const validateResult = validateUser(user)
    console.log(validateResult)

    if(validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 12);
        user.password = hash;
    
    Users.add(user)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json(err))

    } else {
        res.status(400).json({ message: 'Invalid info about the user', errors: validateResult.errors })
    }
})


router.post('/login', (req, res) => {
    let { name, email, password } = req.body;
    
    Users.findBy({ email })
    .first()
    .then(user => {
        if(email && bcrypt.compareSync(password, user.password)) {
            const token = getToken(user)
        
        res.status(200).json({
            message: `Welcome to our running app? ${user.name}`,
            token
        });
        } else {
            res.status(401).json({ message: "Shall not pass" })
        }
    })
    .catch(err => {
        res.status(500).json({ message: "this is login error"});
    })
})

function getToken(email) {
    const payload = {
        email
    };
    const secret = process.env.JWT_SECRET || 'Is it secret? Is it safe?'

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secret, options)
}


module.exports = router;