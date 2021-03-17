const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/image', express.static(path.join(__dirname, './public/images/')));
app.use(express.static(path.join(__dirname, './public/')));

app.use('/', indexRouter);

module.exports = app;