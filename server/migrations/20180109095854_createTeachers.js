
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('id').unsigned().primary();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('firstName').notNull();
    table.string('lastName').notNull();
    table.string('title').notNull();
    table.string('userName').notNull();
    table.string('hashPassword').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teachers')
};
