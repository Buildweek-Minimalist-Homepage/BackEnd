const router = require('express').Router();
const Todo = require('./todo-model.js')


router.get('/', (req, res) => {
    Todo.getAllItems()
    .then(todo => {
        res.status(200).json(todo);
    })
    .catch(err => res.send(err))
})



module.exports = router;