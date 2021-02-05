const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

app = express();

app.get('/api/message', (req, res) => {
  res.send({ express: "Hello, World!" });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
