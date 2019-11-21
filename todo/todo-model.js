const db = require('../data/dbConfig.js')

module.exports = {
    getAllItems,
    addItem,
    findById,
}

function findById(id) {
    return db('todo')
    .where({ id })
    .first();
}

function addItem(item) {
    return db('todo')
        .insert(item, 'id')
        .then(([id]) => {
            return db('todo')
                .where({ id })
                .then(newItem => {
                    return newItem
                })
        })
}

function getAllItems() {
    return db('todo')
    .then(todo => {
        todo.map( item => {
            if(item.isCompleted) {
                item.isCompleted = true
            } else {
                item.isCompleted = false
            }
        })
        return todo
    })
}