const {Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'students_db',
  password: 'wisdom83@',
  port: 5432,
})

module.exports = pool;