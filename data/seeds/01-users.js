exports.seed = function(knex) {
    return knex ('users').insert([
        { email: 'test01@test.com', name: 'test1', password: 'password' },
        { email: 'test02@test.com', name: 'test2', password: 'password' },
    ])
}