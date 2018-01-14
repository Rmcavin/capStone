
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students_class').del()
    .then(function () {
      // Inserts seed entries
      return knex('students_class').insert([
        //5 students in p1 biology
        {id: 1, student_id: 1, class_id: 1},
        {id: 2, student_id: 2, class_id: 1},
        {id: 3, student_id: 3, class_id: 1},
        {id: 4, student_id: 4, class_id: 1},
        {id: 5, student_id: 5, class_id: 1},

        //5 students in p3 biology
        {id: 6, student_id: 6, class_id: 2},
        {id: 7, student_id: 7, class_id: 2},
        {id: 8, student_id: 8, class_id: 2},
        {id: 9, student_id: 9, class_id: 2},
        {id: 10, student_id: 10, class_id: 2},

        //5 students in p4 biology
        {id: 11, student_id: 11, class_id: 3},
        {id: 12, student_id: 12, class_id: 3},
        {id: 13, student_id: 13, class_id: 3},
        {id: 14, student_id: 14, class_id: 3},
        {id: 15, student_id: 15, class_id: 3},

        //5 students in p7 chemistry
        {id: 16, student_id: 16, class_id: 4},
        {id: 17, student_id: 17, class_id: 4},
        {id: 18, student_id: 18, class_id: 4},
        {id: 19, student_id: 19, class_id: 4},
        {id: 20, student_id: 20, class_id: 4},

        //5 students in p6 chemistry
        {id: 21, student_id: 21, class_id: 5},
        {id: 22, student_id: 22, class_id: 5},
        {id: 23, student_id: 23, class_id: 5},
        {id: 24, student_id: 24, class_id: 5},
        {id: 25, student_id: 25, class_id: 5},

        //5 students in p8 chemistry
        {id: 26, student_id: 26, class_id: 6},
        {id: 27, student_id: 27, class_id: 6},
        {id: 28, student_id: 28, class_id: 6},
        {id: 29, student_id: 29, class_id: 6},
        {id: 30, student_id: 30, class_id: 6},

        //5 students in p2 geometry
        {id: 31, student_id: 16, class_id: 7},
        {id: 32, student_id: 17, class_id: 7},
        {id: 33, student_id: 18, class_id: 7},
        {id: 34, student_id: 19, class_id: 7},
        {id: 35, student_id: 20, class_id: 7},

        //5 students in p3 geometry
        {id: 36, student_id: 21, class_id: 8},
        {id: 37, student_id: 22, class_id: 8},
        {id: 38, student_id: 23, class_id: 8},
        {id: 39, student_id: 24, class_id: 8},
        {id: 40, student_id: 25, class_id: 8},

        //5 students in p5 geometry
        {id: 41, student_id: 26, class_id: 9},
        {id: 42, student_id: 27, class_id: 9},
        {id: 43, student_id: 28, class_id: 9},
        {id: 44, student_id: 29, class_id: 9},
        {id: 45, student_id: 30, class_id: 9},

        //5 students in p6 algebra
        {id: 46, student_id: 1, class_id: 10},
        {id: 47, student_id: 2, class_id: 10},
        {id: 48, student_id: 3, class_id: 10},
        {id: 49, student_id: 4, class_id: 10},
        {id: 50, student_id: 5, class_id: 10},

        //5 students in p7 algebra
        {id: 51, student_id: 6, class_id: 11},
        {id: 52, student_id: 7, class_id: 11},
        {id: 53, student_id: 8, class_id: 11},
        {id: 54, student_id: 9, class_id: 11},
        {id: 55, student_id: 10, class_id: 11},

        //5 students in p8 algebra
        {id: 56, student_id: 11, class_id: 12},
        {id: 57, student_id: 12, class_id: 12},
        {id: 58, student_id: 13, class_id: 12},
        {id: 59, student_id: 14, class_id: 12},
        {id: 60, student_id: 15, class_id: 12},
      ]);
    });
};
