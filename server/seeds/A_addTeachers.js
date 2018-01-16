
exports.seed = function(knex, Promise) {
  return knex('teachers').del()
    .then(function () {
      return knex('teachers').insert([
        {username: 'mCurie', hashpassword: '$2a$12$2.9Ytnb2B5EHJtB.TGgkK.O4INbsqUCbIbTCCj3VlJ/GZ3B739uCK', firstname: 'Marie', lastname: 'Curie', title: 'Dr.', createdat: new Date()},
        {username: 'aTuring', hashpassword: '$2a$12$54jJhRkktpA06W0xNxnwLeOWQ5Id1oyPq2Iw9dnpiVVQl90jwKdvy', firstname: 'Alan', lastname: 'Turing', title: 'Dr.', createdat: new Date()}
      ]);
    });
};
