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
            res.status(400).json({ error })
        })
})


// Post call to login
router.post('/login', validateUser, (req, res) => {

    let userInfo = req.body;
    
    let userToCheck = await Users.findByEmail(userInfo.email)
        console.log('authrouter user log',user)
        // Compare hash password to the password that was inputed
        if(userToCheck && bcrypt.compareSync(userInfo.password, userToCheck.password)) {
            // Defining the token
            const token = getToken(userInfo.email)
        // message 200 means request went thru
        res.status(200).json({
            message: `Welcome to our running app `,
            // Send token to client
            token,
            id: userToCheck.id
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
    // jwt is being signed with the id and email AND secret and options that expires in 10days
    // Secret is to make sure it wasn't tampered with
    return jwt.sign(payload, process.env.SECRET || 'Is it secret? Is it safe?', options)
}


module.exports = router;
