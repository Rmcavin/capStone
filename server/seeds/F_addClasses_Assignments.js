
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignments_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('assignments_class').insert([
        //p1 biology
        {id: 1, assignment_id: 1, class_id: 1},
        {id: 2, assignment_id: 2, class_id: 1},

        //p3 biology
        {id: 3, assignment_id: 1, class_id: 2},
        {id: 4, assignment_id: 2, class_id: 2},

        //p4 biology
        {id: 5, assignment_id: 1, class_id: 3},
        {id: 6, assignment_id: 2, class_id: 3},

        //p6 algebra
        {id: 7, assignment_id: 3, class_id: 10},
        {id: 8, assignment_id: 4, class_id: 10},

        //p7 algebra
        {id: 9, assignment_id: 3, class_id: 11},
        {id: 10, assignment_id: 4, class_id: 11},

        //p8 algebra
        {id: 11, assignment_id: 3, class_id: 12},
        {id: 12, assignment_id: 4, class_id: 12},

        //p5 chemistry
        {id: 13, assignment_id: 5, class_id: 4},
        {id: 14, assignment_id: 6, class_id: 4},

        //p7 chemistry
        {id: 15, assignment_id: 5, class_id: 5},
        {id: 16, assignment_id: 6, class_id: 5},

        //p8 chemistry
        {id: 17, assignment_id: 5, class_id: 6},
        {id: 18, assignment_id: 6, class_id: 6},

        //p2 geometry
        {id: 19, assignment_id: 7, class_id: 7},
        {id: 20, assignment_id: 8, class_id: 7},

        //p3 geometry
        {id: 21, assignment_id: 7, class_id: 8},
        {id: 22, assignment_id: 8, class_id: 8},

        //p8 geometry
        {id: 23, assignment_id: 7, class_id: 9},
        {id: 24, assignment_id: 8, class_id: 9},
      ]);
    });
};
