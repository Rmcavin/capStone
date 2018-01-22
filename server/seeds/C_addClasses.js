
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {createdat: new Date(), classname: 'bio p1', subject: 'Science', teacher_id:1},
        {createdat: new Date(), classname: 'bio p3', subject: 'Science', teacher_id:1},
        {createdat: new Date(), classname: 'bio p4', subject: 'Science', teacher_id:1},
        {createdat: new Date(), classname: 'chem p5', subject: 'Science', teacher_id:1},
        {createdat: new Date(), classname: 'chem p7', subject: 'Science', teacher_id:1},
        {createdat: new Date(), classname: 'chem p8', subject: 'Science', teacher_id:1},

        {createdat: new Date(), classname: 'geom p2', subject: 'Mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'geom p3', subject: 'Mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'geom p4', subject: 'Mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'alg p6', subject: 'Mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'alg p7', subject: 'Mathematics', teacher_id:2},
        {createdat: new Date(), classname: 'alg p8', subject: 'Mathematics', teacher_id:2},
      ]);
    });
};
