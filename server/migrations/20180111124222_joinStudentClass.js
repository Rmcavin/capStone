
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students_class', (table) => {
    table.increments('id').unsigned().primary().unique();
    table.integer('student_id').notNullable().references('id').inTable('students').onDelete('CASCADE');
    table.integer('class_id').notNullable().references('id').inTable('classes').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students_class');
};
