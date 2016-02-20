'use strict';

var express = require('express');
var app = express();

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
