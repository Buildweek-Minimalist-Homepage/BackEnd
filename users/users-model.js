const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByEmail,
    getAllUsers,
    updateUser,
    deleteUserById,
    deleteUserByEmail
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

async function updateUser(id, changes) {
    await db('users')
        .where({ id })
        .update(changes)

    return findById(id)
}

function deleteUserById(id) {
    return db("users")
        .where({ id })
        .del();

}

function deleteUserByEmail(email) {
    return db('users')
        .where({ email })
        .del()
}