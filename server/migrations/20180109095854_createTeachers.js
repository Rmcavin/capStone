
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('id').unsigned().primary();
    table.dateTime('createdat').notNull();
    table.dateTime('updatedat').nullable();
    table.dateTime('deletedat').nullable();

    table.string('firstname').notNull();
    table.string('lastname').notNull();
    table.string('title').notNull();
    table.string('username').unique().notNull();
    table.string('hashpassword').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teachers')
};
