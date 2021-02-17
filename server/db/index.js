const { Pool } = require('pg');



const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  async query(text, params, callback) {
    const start = Date.now();
    const res = await pool.query(text, params, callback);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res ? res.rowCount : null });
    return res;
  },
}
