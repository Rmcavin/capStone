
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignments_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('assignments_class').insert([
        //p1 biology
        {assignment_id: 1, class_id: 1},
        {assignment_id: 2, class_id: 1},

        //p3 biology
        {assignment_id: 1, class_id: 2},
        {assignment_id: 2, class_id: 2},

        //p4 biology
        {assignment_id: 1, class_id: 3},
        {assignment_id: 2, class_id: 3},

        //p6 algebra
        {assignment_id: 3, class_id: 10},
        {assignment_id: 4, class_id: 10},

        //p7 algebra
        {assignment_id: 3, class_id: 11},
        {assignment_id: 4, class_id: 11},

        //p8 algebra
        {assignment_id: 3, class_id: 12},
        {assignment_id: 4, class_id: 12},

        //p5 chemistry
        {assignment_id: 5, class_id: 4},
        {assignment_id: 6, class_id: 4},

        //p7 chemistry
        {assignment_id: 5, class_id: 5},
        {assignment_id: 6, class_id: 5},

        //p8 chemistry
        {assignment_id: 5, class_id: 6},
        {assignment_id: 6, class_id: 6},

        //p2 geometry
        {assignment_id: 7, class_id: 7},
        {assignment_id: 8, class_id: 7},

        //p3 geometry
        {assignment_id: 7, class_id: 8},
        {assignment_id: 8, class_id: 8},

        //p8 geometry
        {assignment_id: 7, class_id: 9},
        {assignment_id: 8, class_id: 9},
      ]);
    });
};
