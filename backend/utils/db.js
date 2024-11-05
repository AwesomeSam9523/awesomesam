const { Pool } = require('pg');
// load .env
require('dotenv').config();
console.log("Password: ", process.env.DB_PASSWORD);
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sam',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
