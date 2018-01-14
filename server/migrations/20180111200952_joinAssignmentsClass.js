
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assignments_class', (table) => {
    table.increments('id').unsigned().primary();

    table.integer('assignment_id').notNullable().references('id').inTable('assignments').onDelete('CASCADE');
    table.integer('class_id').notNullable().references('id').inTable('classes').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assignments_class');
};
