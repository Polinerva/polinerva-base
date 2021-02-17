const Router = require('express').Router;
const users = require('./routes/users');
const passwords = require('./routes/passwords');

module.exports = () => {
  const app = Router();

  users(app);
  passwords(app);

  return app;
}
