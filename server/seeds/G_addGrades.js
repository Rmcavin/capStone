
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grades').del()
    .then(function () {
      // Inserts seed entries
      return knex('grades').insert([
        //assignment 1
        //c1
        {id: 1, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 1, class_id: 1},
        {id: 2, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 1, class_id: 1},
        {id: 3, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 1, class_id: 1},
        {id: 4, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 1, class_id: 1},
        {id: 5, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 1, class_id: 1},

        //c2
        {id: 6, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 1, class_id: 2},
        {id: 7, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 1, class_id: 2},
        {id: 8, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 1, class_id: 2},
        {id: 9, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 1, class_id: 2},
        {id: 10, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 1, class_id: 2},

        //c3
        {id: 11, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 1, class_id: 3},
        {id: 12, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 1, class_id: 3},
        {id: 13, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 1, class_id: 3},
        {id: 14, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 1, class_id: 3},
        {id: 15, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 1, class_id: 3},
        //assignment 2
        //c1
        {id: 16, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 2, class_id: 1},
        {id: 17, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 2, class_id: 1},
        {id: 18, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 2, class_id: 1},
        {id: 19, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 2, class_id: 1},
        {id: 20, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 2, class_id: 1},

        //c2
        {id: 21, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 2, class_id: 2},
        {id: 22, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 2, class_id: 2},
        {id: 23, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 2, class_id: 2},
        {id: 24, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 2, class_id: 2},
        {id: 25, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 2, class_id: 2},

        //c3
        {id: 26, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 2, class_id: 3},
        {id: 27, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 2, class_id: 3},
        {id: 28, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 2, class_id: 3},
        {id: 29, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 2, class_id: 3},
        {id: 30, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 2, class_id: 3},

        //assignment 3
        //c10
        {id: 31, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 3, class_id: 10},
        {id: 32, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 3, class_id: 10},
        {id: 33, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 3, class_id: 10},
        {id: 34, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 3, class_id: 10},
        {id: 35, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 3, class_id: 10},

        //c11
        {id: 36, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 3, class_id: 11},
        {id: 37, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 3, class_id: 11},
        {id: 38, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 3, class_id: 11},
        {id: 39, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 3, class_id: 11},
        {id: 40, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 3, class_id: 11},

        //c12
        {id: 41, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 3, class_id: 12},
        {id: 42, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 3, class_id: 12},
        {id: 43, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 3, class_id: 12},
        {id: 44, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 3, class_id: 12},
        {id: 45, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 3, class_id: 12},

        //assignment 4
        //c10
        {id: 46, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 1, assignment_id: 4, class_id: 10},
        {id: 47, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 2, assignment_id: 4, class_id: 10},
        {id: 48, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 3, assignment_id: 4, class_id: 10},
        {id: 49, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 4, assignment_id: 4, class_id: 10},
        {id: 50, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 5, assignment_id: 4, class_id: 10},

        //c11
        {id: 51, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 6, assignment_id: 4, class_id: 11},
        {id: 52, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 7, assignment_id: 4, class_id: 11},
        {id: 53, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 8, assignment_id: 4, class_id: 11},
        {id: 54, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 9, assignment_id: 4, class_id: 11},
        {id: 55, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 10, assignment_id: 4, class_id: 11},

        //c12
        {id: 56, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 11, assignment_id: 3, class_id: 12},
        {id: 57, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 12, assignment_id: 3, class_id: 12},
        {id: 58, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 13, assignment_id: 3, class_id: 12},
        {id: 59, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 14, assignment_id: 3, class_id: 12},
        {id: 60, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 15, assignment_id: 3, class_id: 12},

        //assignment 5
        //c4
        {id: 61, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 5, class_id: 4},
        {id: 62, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 5, class_id: 4},
        {id: 63, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 5, class_id: 4},
        {id: 64, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 5, class_id: 4},
        {id: 65, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 5, class_id: 4},

        //c5
        {id: 66, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 5, class_id: 5},
        {id: 67, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 5, class_id: 5},
        {id: 68, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 5, class_id: 5},
        {id: 69, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 5, class_id: 5},
        {id: 70, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 5, class_id: 5},

        //c6
        {id: 71, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 5, class_id: 6},
        {id: 72, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 5, class_id: 6},
        {id: 73, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 5, class_id: 6},
        {id: 74, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 5, class_id: 6},
        {id: 75, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 5, class_id: 6},

        //assignment 6
        //c4
        {id: 76, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 6, class_id: 4},
        {id: 77, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 6, class_id: 4},
        {id: 78, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 6, class_id: 4},
        {id: 79, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 6, class_id: 4},
        {id: 80, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 6, class_id: 4},

        //c5
        {id: 81, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 6, class_id: 5},
        {id: 82, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 6, class_id: 5},
        {id: 83, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 6, class_id: 5},
        {id: 84, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 6, class_id: 5},
        {id: 85, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 6, class_id: 5},

        //c6
        {id: 86, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 6, class_id: 6},
        {id: 87, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 6, class_id: 6},
        {id: 88, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 6, class_id: 6},
        {id: 89, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 6, class_id: 6},
        {id: 90, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 6, class_id: 6},

        //assignment 7
        //c7
        {id: 91, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 7, class_id: 7},
        {id: 92, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 7, class_id: 7},
        {id: 93, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 7, class_id: 7},
        {id: 94, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 7, class_id: 7},
        {id: 95, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 7, class_id: 7},

        //c8
        {id: 96, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 7, class_id: 8},
        {id: 97, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 7, class_id: 8},
        {id: 98, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 7, class_id: 8},
        {id: 99, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 7, class_id: 8},
        {id: 100, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 7, class_id: 8},

        //c9
        {id: 101, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 7, class_id: 9},
        {id: 102, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 7, class_id: 9},
        {id: 103, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 7, class_id: 9},
        {id: 104, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 7, class_id: 9},
        {id: 105, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 7, class_id: 9},

        //assignment 8
        //c7
        {id: 106, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 16, assignment_id: 8, class_id: 7},
        {id: 107, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 17, assignment_id: 8, class_id: 7},
        {id: 108, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 18, assignment_id: 8, class_id: 7},
        {id: 109, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 19, assignment_id: 8, class_id: 7},
        {id: 110, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 20, assignment_id: 8, class_id: 7},

        //c8
        {id: 111, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 21, assignment_id: 8, class_id: 8},
        {id: 112, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 22, assignment_id: 8, class_id: 8},
        {id: 113, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 23, assignment_id: 8, class_id: 8},
        {id: 114, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 24, assignment_id: 8, class_id: 8},
        {id: 115, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 25, assignment_id: 8, class_id: 8},

        //c9
        {id: 116, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 26, assignment_id: 8, class_id: 9},
        {id: 117, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 27, assignment_id: 8, class_id: 9},
        {id: 118, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 28, assignment_id: 8, class_id: 9},
        {id: 119, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 29, assignment_id: 8, class_id: 9},
        {id: 120, createdat: new Date(), score: Math.floor(Math.random()*100), due_date: new Date(2018, 0, 10), submit_date: new Date(2018, 0, 10), student_id: 30, assignment_id: 8, class_id: 9},
      ]);
    });
};
