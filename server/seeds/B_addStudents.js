
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {username: 'student1', hashpassword: '$2a$12$iInDXleQUpXMnM31UpzYOOaIUhg6OnYNU4Dn7N90T9o0pdZ/183lq', firstname: 'George', lastname: 'Washington', grade: 9, createdat: new Date()},
        {username: 'student2', hashpassword: '$2a$12$xs/gXkyHp2tHNDgoefzlJO0MJBbSCCQUjIvLgAaC0Aa7FXlthQxwm', firstname: 'John', lastname: 'Adams', grade: 9, createdat: new Date()},
        {username: 'student3', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Thomas', lastname: 'Jefferson', grade: 9, createdat: new Date()},
        {username: 'student4', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'James', lastname: 'Madison', grade: 9, createdat: new Date()},
        {username: 'student5', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'James', lastname: 'Monroe', grade: 9, createdat: new Date()},
        {username: 'student6', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'John', lastname: 'Adams', grade: 9, createdat: new Date()},
        {username: 'student7', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Andrew', lastname: 'Jackson', grade: 9, createdat: new Date()},
        {username: 'student8', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Martin', lastname: 'Buren', grade: 9, createdat: new Date()},
        {username: 'student9', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'William', lastname: 'Harrison', grade: 9, createdat: new Date()},
        {username: 'student10', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'John', lastname: 'Tyler', grade: 9, createdat: new Date()},
        {username: 'student11', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'James', lastname: 'Polk', grade: 9, createdat: new Date()},
        {username: 'student12', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Zachary', lastname: 'Taylor', grade: 9, createdat: new Date()},
        {username: 'student13', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Millard', lastname: 'Fillmore', grade: 9, createdat: new Date()},
        {username: 'student14', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Franklin', lastname: 'Pierce', grade: 9, createdat: new Date()},
        {username: 'student15', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'James', lastname: 'Buchanan', grade: 9, createdat: new Date()},
        {username: 'student16', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Abraham', lastname: 'Lincoln', grade: 10, createdat: new Date()},
        {username: 'student17', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Andrew', lastname: 'Johnson', grade: 10, createdat: new Date()},
        {username: 'student18', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Ulysses', lastname: 'Grant', grade: 10, createdat: new Date()},
        {username: 'student19', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Rutherford', lastname: 'Hayes', grade: 10, createdat: new Date()},
        {username: 'student20', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'James', lastname: 'Garfield', grade: 10, createdat: new Date()},
        {username: 'student21', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Chester', lastname: 'Arthur', grade: 10, createdat: new Date()},
        {username: 'student22', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Grover', lastname: 'Cleveland', grade: 10, createdat: new Date()},
        {username: 'student23', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'William', lastname: 'Mckinley', grade: 10, createdat: new Date()},
        {username: 'student24', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Benjamin', lastname: 'Harrison', grade: 10, createdat: new Date()},
        {username: 'student25', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Theodore', lastname: 'Roosevelt', grade: 10, createdat: new Date()},
        {username: 'student26', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'William', lastname: 'Taft', grade: 10, createdat: new Date()},
        {username: 'student27', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Woodrow', lastname: 'Wilson', grade: 10, createdat: new Date()},
        {username: 'student28', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Warren', lastname: 'Harding', grade: 10, createdat: new Date()},
        {username: 'student29', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Calvin', lastname: 'Coolidge', grade: 10, createdat: new Date()},
        {username: 'student30', hashpassword: '$2a$12$osK8IIK/Ym7WQHdFqmsAhOhEqu/OWQ3P3Z6SLelElxHCRwtUFr86O', firstname: 'Herbert', lastname: 'Hoover', grade: 10, createdat: new Date()}
      ]);
    });
};
