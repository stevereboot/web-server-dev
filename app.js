// app.js

// Express app
var express = require('express');
var app = express();

// Modules
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// View engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// Mount middleware
//app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'stevereboot.github.io')));

// Routes (after static)
app.use('/', require('./routes/index'));	// Last

module.exports = app;