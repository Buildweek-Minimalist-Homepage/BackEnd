const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByEmail,
    getAllUsers,
};

function find() {
    return db('users').select('id', 'email', 'password');
}

function findBy(filter) {
    return db('users').where(filter).first();
}

function findByEmail(email) {
    return db('users').where({ email })
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function getAllUsers() {
    return db('users')
}

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}