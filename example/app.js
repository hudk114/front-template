const express = require('express');
const path = require('path');
const fs = require('fs');
const opn = require('opn');
const { example } = require('../config');

const app = express();

fs.copyFileSync(
  path.resolve(__dirname, `../dist/${example.libName}`),
  path.resolve(__dirname, `./public/js/${example.libName}`)
);

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.listen(7000, _ => {
  console.log('listen to localhost:7000');
  opn('http://localhost:7000');
});
