
exports.seed = function(knex, Promise) {
  return knex('teachers').del()
    .then(function () {
      return knex('teachers').insert([
        {id: 1, username: 'test', hashpassword: '$2a$12$2.9Ytnb2B5EHJtB.TGgkK.O4INbsqUCbIbTCCj3VlJ/GZ3B739uCK', firstname: 'Ima', lastname: 'Test', title: 'Dr.', createdat: new Date()},
        {id: 2, username: 'rmcavin', hashpassword: '$2a$12$54jJhRkktpA06W0xNxnwLeOWQ5Id1oyPq2Iw9dnpiVVQl90jwKdvy', firstname: 'Rachel', lastname: 'Cavin', title: 'Ms.', createdat: new Date()}
      ]);
    });
};
