
exports.seed = function(knex) {
    return knex ('todo').insert([
        {user_id: 1, todo_item: 'get eggs', isCompleted: false},
        {user_id: 2, todo_item: 'get milk', isCompleted: false},
        {user_id: 3, todo_item: 'get drip', isCompleted: true}
    ])
}
