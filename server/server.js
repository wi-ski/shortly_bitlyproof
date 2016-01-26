  var express = require('express');
  var mongoose = require('mongoose');

  var app = express();

  mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly

  require('./config/middleware.js')(app, express);


  app.listen(8000);

  module.exports = app;
