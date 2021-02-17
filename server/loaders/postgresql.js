const db = require('../db');

module.exports = {
  async init() {
    db
      .query('SELECT table_schema,table_name FROM information_schema.tables;')
      .then(res => console.log(`DB tables: ${res.rowCount}`))
      .catch(err => console.error('Error connecting to DB', err.stack));
  }
}
