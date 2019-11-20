
exports.up = function(knex) {
  return knex.schema.createTable('todo', tbl => {
      tbl.increments();
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
    
      tbl.string('todo_item', 255).notNullable();

      tbl.boolean('isCompleted', false)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('todo')
};
