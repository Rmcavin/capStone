# Capstone Project Proposal

### Project Description

This application will streamline the assessment and scoring process for secondary and post secondary teachers. Teachers can create, assign, score (or auto-grade multiple choice), and review scores across all students, classes, and courses.

### What problem does your project solve?

When I was a teacher scoring and grade entry typically took 45 minutes to 2 hours a day, even for multiple choice assessments. The goal of this app is to substantially reduce this time investment for teachers so they can focus on things that matter more.

### Who has this problem?

Secondary and post secondary teachers.

### How will your project solve this problem?

Teachers can use the application to create and store multiple choice and rubric-based assessments. They can assign assessments by class and all students in that class will receive a copy of the assessment. Students can take multiple choice assessments and receive instantaneous feedback, then teachers can see immediate updates to the grade book. Teachers can also score students rubric assignments in the app, and those scores automatically update the grade book and can be reviewed by individual students.

### What inputs does it need?

Teachers will create multiple choice assessments and rubrics. Rubrics need to be manually graded whereas multiple choice assessments are graded by the app. They will also need to create their courses, classes, and add students.

### What outputs does it produce?

The app will calculate multiple choice assignment scores, basic statistics like averages, show a grade book and feedback on individual assignments (Questions missed, rubric scores)

### What technologies do you plan to use?

React/Redux
Node
Express
PostgreSQL/knex
MongoDB/mongoose (maybe)
Bcrypt
D3 (maybe)

### Prioritized Feature list

Teachers:
  - create Rubrics
  - score Rubrics
  - assign Rubrics
  - create multiple choice assessments
  - assign assessments
  - view immediate scores/feedback from student assessments
  - review student, class, and course scores by assignment and overall
  - STRETCH view descriptive statistics and data visualizations.

Students:
  - take assessments
  - see immediate feedback on assessments
  - view rubrics before and after scoring
  - view scores
  - STRETCH view statistics and data visualizations.
