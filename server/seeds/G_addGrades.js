
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grades').del()
    .then(function () {
      // Inserts seed entries
      return knex('grades').insert([
        //assignment 1
        //c1
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 1, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 1, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 1, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 1, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 1, class_id: 1},

        //c2
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 1, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 1, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 1, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 1, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 1, class_id: 2},

        //c3
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 1, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 1, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 1, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 1, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 1, class_id: 3},
        //assignment 2
        //c1
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 2, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 2, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 2, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 2, class_id: 1},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 2, class_id: 1},

        //c2
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 2, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 2, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 2, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 2, class_id: 2},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 2, class_id: 2},

        //c3
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 2, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 2, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 2, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 2, class_id: 3},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 2, class_id: 3},

        //assignment 3
        //c10
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 3, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 3, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 3, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 3, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 3, class_id: 10},

        //c11
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 3, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 3, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 3, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 3, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 3, class_id: 11},

        //c12
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 3, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 3, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 3, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 3, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 3, class_id: 12},

        //assignment 4
        //c10
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 4, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 4, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 4, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 4, class_id: 10},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 4, class_id: 10},

        //c11
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 4, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 4, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 4, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 4, class_id: 11},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 4, class_id: 11},

        //c12
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 4, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 4, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 4, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 4, class_id: 12},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 4, class_id: 12},

        //assignment 5
        //c4
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 5, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 5, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 5, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 5, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 5, class_id: 4},

        //c5
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 5, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 5, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 5, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 5, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 5, class_id: 5},

        //c6
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 5, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 5, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 5, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 5, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 5, class_id: 6},

        //assignment 6
        //c4
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 6, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 6, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 6, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 6, class_id: 4},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 6, class_id: 4},

        //c5
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 6, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 6, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 6, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 6, class_id: 5},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 6, class_id: 5},

        //c6
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 6, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 6, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 6, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 6, class_id: 6},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 6, class_id: 6},

        //assignment 7
        //c7
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 7, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 7, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 7, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 7, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 7, class_id: 7},

        //c8
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 7, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 7, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 7, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 7, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 7, class_id: 8},

        //c9
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 7, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 7, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 7, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 7, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 7, class_id: 9},

        //assignment 8
        //c7
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 8, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 8, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 8, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 8, class_id: 7},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 8, class_id: 7},

        //c8
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 8, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 8, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 8, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 8, class_id: 8},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 8, class_id: 8},

        //c9
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 8, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 8, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 8, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 8, class_id: 9},
        {createdat: new Date(), score: Math.floor(Math.random()*100), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 8, class_id: 9},
      ]);
    });
};
