module.exports = {

  development: {
    client: 'postgres',
    connection: 'postgres://localhost:5432/capstone_dev'
  },
  test: {
    client: 'postgres',
    connection: 'postgres://localhost:5432/capstone_test'
  },
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL
  }
};
