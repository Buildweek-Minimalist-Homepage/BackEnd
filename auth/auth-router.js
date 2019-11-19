const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { validateUser } = require('../users/validateUser.js')
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');


// router.post('/register', (req, res) => {
//     let user = req.body;
    
//     const validateResult = validateUser(user)
//     console.log(validateResult)

//     if(validateResult.isSuccessful === true) {
//         const hash = bcrypt.hashSync(user.password, 12);
//         user.password = hash;
    
//     Users.add(user)
//     .then(saved => {
//         const token = getToken(user.email)
//         res.status(201).json({
//             id: saved.id,
//             email: saved.email,
//             token: token
//         })
//     })
//     .catch(err => res.status(500).json(err))

//     } else {
//         res.status(400).json({ message: 'Invalid info about the user', errors: validateResult.errors })
//     }
// })


router.post('/register', validateUser, (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(new_user => {
            const token = getToken(new_user);
            // delete new_user.password;
            res.status(201).json({ new_user, token })
        })
        .catch(error => {
            res.status(500).json({ error })
        })
})


router.post('/login', async (req, res) => {
    let userInfo = req.body;
    
    let user = await Users.findByEmail(userInfo.email)
        console.log('authrouter user log',user)

        if(user) {
            const token = getToken(userInfo.email)
        
        res.status(200).json({
            message: `Welcome to our running app `,
            token: token,
            password: userInfo.password
        });
        } else if(!user) {
            res.status(500).json({ message: 'No user'})
        } else {
            console.log(user)
            res.status(401).json({ message: "Shall not pass" })
        }
    })


// function getToken(email) {
//     const payload = {
//         email
//     };
//     const secret = process.env.JWT_SECRET || 'Is it secret? Is it safe?'

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


module.exports = router;