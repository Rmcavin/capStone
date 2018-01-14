
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assignments', (table) => {
    table.increments('id').unsigned().primary();
    table.dateTime('createdat').notNull();
    table.dateTime('updatedat').nullable();
    table.dateTime('deletedat').nullable();

    table.string('assignmentname').notNull();
    table.string('type').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assignments');
};
