const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./../api');
const path = require('path');


module.exports = {
  setup({ app }) {
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    console.log(__dirname);
    app.use('/api/', routes());

    const rootDir = /.*\/polinerva-base\//g.exec(__dirname)[0];

    app.use(express.static(path.join(rootDir, 'client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(rootDir+'/client/build/index.html'));
    });
  }
};
