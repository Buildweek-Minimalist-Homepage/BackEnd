const bcrypt = require('bcryptjs');


exports.seed = function(knex) {
    return knex ('users').insert([
        { email: 'test01@test.com', name: 'test1', password: bcrypt.hashSync("password", 10) },
        { email: 'test02@test.com', name: 'test2', password: bcrypt.hashSync("password", 10) },
    ])
}