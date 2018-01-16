
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {createdat: new Date(), classname: 'bio p1', subject: 'science', teacher_id:1},
        {createdat: new Date(), classname: 'bio p3', subject: 'science', teacher_id:1},
        {createdat: new Date(), classname: 'bio p4', subject: 'science', teacher_id:1},
        {createdat: new Date(), classname: 'chem p5', subject: 'science', teacher_id:1},
        {createdat: new Date(), classname: 'chem p7', subject: 'science', teacher_id:1},
        {createdat: new Date(), classname: 'chem p8', subject: 'science', teacher_id:1},

        {createdat: new Date(), classname: 'geom p2', subject: 'mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'geom p3', subject: 'mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'geom p4', subject: 'mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'alg p6', subject: 'mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'alg p7', subject: 'mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'alg p8', subject: 'mathematics', teacher_id:2},
      ]);
    });
};
