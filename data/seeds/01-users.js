exports.seed = function(knex) {
    return knex ('users').insert([
        { email: 'test01@test.com', password: 'password' },
        { email: 'test02@test.com', password: 'password' },
    ])
}