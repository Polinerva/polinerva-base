const Router = require('express').Router;
const generatePassword = require('password-generator');

const route = Router();

module.exports = ( app ) => {
  app.use('/passwords', route);

  route.get('/', (req, res) => {
    const count = 5;

    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
      generatePassword(12, false)
    )

    // Return them as json
    res.json(passwords);

    console.log(`Sent ${count} passwords`);
  });
};
