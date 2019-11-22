  
const router = require('express').Router();
const Users = require('./users-model.js');
const Todo = require('../todo/todo-model.js')

router.get('/', (req, res) => {
 Users.getAllUsers()
 .then(users => {
     res.status(200).json(users);
 })
 .catch(err => res.send(err));
});

router.get('/:id', verifyUserId, (req, res) => {
    const id = req.params.id;

    Users.findById(id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'user not found' })
    })
})

// router.get('/:id', verifyUserId, (req, res) => {
//     const {id} = req.params;

//     Users.findById(id)
//     .then(user => {
//         if(user) {
//             Todo.findById(user_id)
//             .then(item => {
//                 user.item = item
//                 res.status(200).json(item)
//             })
//             .catch(err => res.status(500).json(err))
//         } else {
//             res.status(404).json({ error: 'user not found' })
//         }
//     })
// })


// ---------------------------- EDIT User by Id -----------------------------------
router.put('/:id', verifyUserId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    console.log(id, changes)
    

    Users.updateUser(id, changes)
        .then(updatedUser => {
        
            delete updatedUser.password;
            res.status(201).json(updatedUser)
        })
        .catch(err => {
            res.status(500).json({err});
        })
})


// ---------------------------- DELETE User by Id -----------------------------------
router.delete('/:id', verifyUserId, (req, res) => {
    const id = req.params.id;

    Users.deleteUser(id)
        .then(deleted => {
            console.log(deleted)
            if(deleted) {
                res.status(200).json({ message: 'User has been deleted' })
            } else {
                res.status(400).json({ message: 'The user with this id does not exists.' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})


function verifyUserId(req, res, next) {
    const id = req.params.id;
    console.log(id)
    Users.findById(id)
        .then(user => {
            if(user) {
                req.user = user;
                console.log(user)
                next();
            } else {
                res.status(404).json({ message: 'User Not Found.' });
            }
        })
        .catch(err => {
            res.status(500).json({ err })
        })
}





module.exports = router;