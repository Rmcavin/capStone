
exports.up = function(knex, Promise) {
  return knex.schema.createTable('grades', (table) => {
    table.increments('id').unsigned().primary();
    table.dateTime('createdat').notNull();
    table.dateTime('updatedat').nullable();
    table.dateTime('deletedat').nullable();

    table.integer('score').notNull();
    table.datetime('due_date').notNull();
    table.datetime('submit_date');
    table.integer('student_id').references('id').inTable('students');
    table.integer('assignment_id').references('id').inTable('assignments');
    table.integer('class_id').references('id').inTable('classes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('grades')
};
