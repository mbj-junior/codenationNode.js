const { NODE_ENV = 'development' } = process.env

module.exports = {
  db: {
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : `codenation`,
  },
  auth: {
    user: 'admin',
    password: 'Admin@123!',
    secret: 'draco dormiens nunquam titillandus'
  },
  env: NODE_ENV
}
