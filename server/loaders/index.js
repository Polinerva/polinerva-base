const postgresqlLoader = require('./postgresql');
const expressLoader = require('./express');

module.exports = {
  async init({ expressApp }) {
    await postgresqlLoader.init();
    await expressLoader.setup({ app: expressApp });
  }
}
