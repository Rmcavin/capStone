
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assignments').insert([
        {id: 1, createdat: new Date(), assignmentname: 'Cell membrane worksheet', type: 'exercise'},
        {id: 2, createdat: new Date(), assignmentname: 'Plant cells vs animal cells', type: 'exercise'},
        {id: 3, createdat: new Date(), assignmentname: 'Coordinate plane practice', type: 'exercise'},
        {id: 4, createdat: new Date(), assignmentname: 'Slope worksheet', type: 'exercise'},
        {id: 5, createdat: new Date(), assignmentname: 'Stoichiometry practice', type: 'exercise'},
        {id: 6, createdat: new Date(), assignmentname: 'Molar mass vs atomic mass', type: 'exercise'},
        {id: 7, createdat: new Date(), assignmentname: 'Perimeter and area practice', type: 'exercise'},
        {id: 8, createdat: new Date(), assignmentname: 'Pologons worksheet', type: 'exercise'}
      ]);
    });
};
