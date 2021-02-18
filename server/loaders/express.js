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

    const rgx = /.*\/polinerva-base\//g.exec(__dirname);
    const rootDir = rgx ? rgx[0] : '/app/';

    console.log(`Root Dir: ${rootDir}`);

    app.use(express.static(path.join(rootDir, 'client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(rootDir+'/client/build/index.html'));
    });
  }
};
