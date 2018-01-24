![Title](/readme_assets/firstslide.png)

# Scorekeeper, a streamlined assessment and scoring application for teachers.

This application was built by [Rachel Cavin](www.rachelcavin.com) in 2 weeks as her capstone project for the Galvanize Web Development Immersive Course.

### Within 5 years, 40-50% of teachers leave the industry.

Teachers need better tools and resources to make doing their job efficient and effective. Scorekeeper is an early-stage product that aims to reduce the amount of time teachers spend on scoring assignments, creating and administering assessments, and monitoring student progress.

### Current features
![Gradebook](/readme_assets/gradebook.png)

* Editable gradebook for updating student grades by assignment in each class.
* Roster for adding and updating enrollment by class.
* Class and assignment manager for adding and updating records as needed.
* Student gradebook view for quick communication of grades.
* Teacher-managed student log in credentials to ensure lost usernames and passwords can be quickly updated.

### Future features

* Streamlined assessment and rubric creation.
* Student assessment view for quick, paperless exams.
* Instantaneous grading of multiple choice assessments and automatic gradebook updates.
* Storage of assessments and rubrics so teachers can assign them across multiple classes over multiple school years.
* Data visualizations and statistics indicating student performance, notifications of changes in performance so teachers and intervene quickly.


### Technologies

* Front-End: React.js for UI development, Aphrodite for CSS in JS styling.
* Server: Node and Express.
* Database: PostgreSQL was chosen because schools can be better modeled in a relational database. Knex.js was used for query building to interface with Postgres in Javascript.
* VCS: Git CLI and Github.
* Deployment: Heroku.

### Technical Challenges

* Database complexity: With 7 tables, dozens of joins, and many data transformations from display format to storage format and back again, this was the most challenging database I have yet to work with. Getting comfortable with this complexity took time, but ultimately I was able to figure it out with time and practice.
* React State Management: This application requires a lot of information that is passed between components. I intend to refactor the front end to use Redux for improved state management across all my components.
* Authorization, Authentication, and Security: With two different log in options each with their own access levels, ensuring users don't have access to the wrong parts of the app was critical. Security is an ongoing challenge given the sensitivity of student data and an area that will continue to improve.

### Technical Demo

[Demo Video](https://www.youtube.com/watch?v=wfKgLxQ-SqE)
