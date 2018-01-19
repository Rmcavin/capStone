
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assignments').insert([
        {createdat: new Date(), assignmentname: 'Cell membrane worksheet', type: 'exercise', teacher_id:1},
        {createdat: new Date(), assignmentname: 'Plant cells vs animal cells', type: 'exercise', teacher_id:1},
        {createdat: new Date(), assignmentname: 'Coordinate plane practice', type: 'exercise', teacher_id:2},
        {createdat: new Date(), assignmentname: 'Slope worksheet', type: 'exercise', teacher_id:2},
        {createdat: new Date(), assignmentname: 'Stoichiometry practice', type: 'exercise', teacher_id:1},
        {createdat: new Date(), assignmentname: 'Molar mass vs atomic mass', type: 'exercise', teacher_id:1},
        {createdat: new Date(), assignmentname: 'Perimeter and area practice', type: 'exercise', teacher_id:2},
        {createdat: new Date(), assignmentname: 'Polygons worksheet', type: 'exercise', teacher_id:2}
      ]);
    });
};
