
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').unsigned().primary().unique();
    table.dateTime('createdat').notNull();
    table.dateTime('updatedat').nullable();
    table.dateTime('deletedat').nullable();

    table.string('classname').notNull();
    table.string('subject').notNull();
    table.integer('teacher_id').references('id').inTable('teachers').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classes');
};
