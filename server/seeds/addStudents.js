
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, username: 'student1', hashpassword: '$2a$12$iInDXleQUpXMnM31UpzYOOaIUhg6OnYNU4Dn7N90T9o0pdZ/183lq', firstname: 'George', lastname: 'Washington', grade: 9, createdat: new Date()},
        {id: 2, username: 'student2', hashpassword: '$2a$12$xs/gXkyHp2tHNDgoefzlJO0MJBbSCCQUjIvLgAaC0Aa7FXlthQxwm', firstname: 'John', lastname: 'Adams', grade: 8, createdat: new Date()},
        {id: 3, username: 'student3', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Thomas', lastname: 'Jefferson', grade: 10, createdat: new Date()}
      ]);
    });
};
