  
const router = require('express').Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
 Users.getAllUsers()
 .then(users => {
     res.status(200).json(users);
 })
 .catch(err => res.send(err));
});

function verifyUserId(req, res, next) {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            if(user) {
                req.user = item;
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