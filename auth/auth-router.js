const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { validateUser } = require('../users/validateUser.js')
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const Todo = require('../todo/todo-model.js')

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
            // password: userInfo.password
        });
        } else if(!user) {
            res.status(401).json({ message: 'No user'})
        } else {
            console.log(user)
            res.status(500).json({ message: "Shall not pass" })
        }
    })

    router.post('/todo', (req, res) => {
        const body = req.body
        
        Todo.addItem(body)
            .then(item => {
                res.status(200).json(item)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: "Could not post new item" })
            })

    })

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


module.exports = router;