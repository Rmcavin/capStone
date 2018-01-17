
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignments_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('assignments_class').insert([
        //p1 biology
        {due_date: new Date(2018, 0, 24),assignment_id: 1, class_id: 1},
        {due_date: new Date(2018, 0, 24),assignment_id: 2, class_id: 1},

        //p3 biology
        {due_date: new Date(2018, 0, 24),assignment_id: 1, class_id: 2},
        {due_date: new Date(2018, 0, 24),assignment_id: 2, class_id: 2},

        //p4 biology
        {due_date: new Date(2018, 0, 24),assignment_id: 1, class_id: 3},
        {due_date: new Date(2018, 0, 24),assignment_id: 2, class_id: 3},

        //p6 algebra
        {due_date: new Date(2018, 0, 24),assignment_id: 3, class_id: 10},
        {due_date: new Date(2018, 0, 24),assignment_id: 4, class_id: 10},

        //p7 algebra
        {due_date: new Date(2018, 0, 24),assignment_id: 3, class_id: 11},
        {due_date: new Date(2018, 0, 24),assignment_id: 4, class_id: 11},

        //p8 algebra
        {due_date: new Date(2018, 0, 24),assignment_id: 3, class_id: 12},
        {due_date: new Date(2018, 0, 24),assignment_id: 4, class_id: 12},

        //p5 chemistry
        {due_date: new Date(2018, 0, 25),assignment_id: 5, class_id: 4},
        {due_date: new Date(2018, 0, 25),assignment_id: 6, class_id: 4},

        //p7 chemistry
        {due_date: new Date(2018, 0, 25),assignment_id: 5, class_id: 5},
        {due_date: new Date(2018, 0, 25),assignment_id: 6, class_id: 5},

        //p8 chemistry
        {due_date: new Date(2018, 0, 25),assignment_id: 5, class_id: 6},
        {due_date: new Date(2018, 0, 25),assignment_id: 6, class_id: 6},

        //p2 geometry
        {due_date: new Date(2018, 0, 25),assignment_id: 7, class_id: 7},
        {due_date: new Date(2018, 0, 25),assignment_id: 8, class_id: 7},

        //p3 geometry
        {due_date: new Date(2018, 0, 25),assignment_id: 7, class_id: 8},
        {due_date: new Date(2018, 0, 25),assignment_id: 8, class_id: 8},

        //p8 geometry
        {due_date: new Date(2018, 0, 25),assignment_id: 7, class_id: 9},
        {due_date: new Date(2018, 0, 25),assignment_id: 8, class_id: 9},
      ]);
    });
};
