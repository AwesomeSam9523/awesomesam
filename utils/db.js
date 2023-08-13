const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sam',
  password: 'jL8iPDVyMTwFPH7EcLcSHnacW5ei7p',
  port: 5432,
});

module.exports = pool;