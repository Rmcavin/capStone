
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('students_class').insert([
        //5 students in p1 biology
        {student_id: 1, class_id: 1},
        {student_id: 2, class_id: 1},
        {student_id: 3, class_id: 1},
        {student_id: 4, class_id: 1},
        {student_id: 5, class_id: 1},

        //5 students in p3 biology
        {student_id: 6, class_id: 2},
        {student_id: 7, class_id: 2},
        {student_id: 8, class_id: 2},
        {student_id: 9, class_id: 2},
        {student_id: 10, class_id: 2},

        //5 students in p4 biology
        {student_id: 11, class_id: 3},
        {student_id: 12, class_id: 3},
        {student_id: 13, class_id: 3},
        {student_id: 14, class_id: 3},
        {student_id: 15, class_id: 3},

        //5 students in p7 chemistry
        {student_id: 16, class_id: 4},
        {student_id: 17, class_id: 4},
        {student_id: 18, class_id: 4},
        {student_id: 19, class_id: 4},
        {student_id: 20, class_id: 4},

        //5 students in p6 chemistry
        {student_id: 21, class_id: 5},
        {student_id: 22, class_id: 5},
        {student_id: 23, class_id: 5},
        {student_id: 24, class_id: 5},
        {student_id: 25, class_id: 5},

        //5 students in p8 chemistry
        {student_id: 26, class_id: 6},
        {student_id: 27, class_id: 6},
        {student_id: 28, class_id: 6},
        {student_id: 29, class_id: 6},
        {student_id: 30, class_id: 6},

        //5 students in p2 geometry
        {student_id: 16, class_id: 7},
        {student_id: 17, class_id: 7},
        {student_id: 18, class_id: 7},
        {student_id: 19, class_id: 7},
        {student_id: 20, class_id: 7},

        //5 students in p3 geometry
        {student_id: 21, class_id: 8},
        {student_id: 22, class_id: 8},
        {student_id: 23, class_id: 8},
        {student_id: 24, class_id: 8},
        {student_id: 25, class_id: 8},

        //5 students in p5 geometry
        {student_id: 26, class_id: 9},
        {student_id: 27, class_id: 9},
        {student_id: 28, class_id: 9},
        {student_id: 29, class_id: 9},
        {student_id: 30, class_id: 9},

        //5 students in p6 algebra
        {student_id: 1, class_id: 10},
        {student_id: 2, class_id: 10},
        {student_id: 3, class_id: 10},
        {student_id: 4, class_id: 10},
        {student_id: 5, class_id: 10},

        //5 students in p7 algebra
        {student_id: 6, class_id: 11},
        {student_id: 7, class_id: 11},
        {student_id: 8, class_id: 11},
        {student_id: 9, class_id: 11},
        {student_id: 10, class_id: 11},

        //5 students in p8 algebra
        {student_id: 11, class_id: 12},
        {student_id: 12, class_id: 12},
        {student_id: 13, class_id: 12},
        {student_id: 14, class_id: 12},
        {student_id: 15, class_id: 12},
      ]);
    });
};
