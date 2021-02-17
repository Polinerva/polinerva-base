const express = require('express');

async function startServer() {
  const app = express();

  await require('./loaders').init({ expressApp: app });

  app.listen(process.env.PORT || 5000, () => {
    console.info('Server listening on port 5000');
  }).on('error', err => {
    console.error('Error', err);
    process.exit(1);
  })
};

startServer();
