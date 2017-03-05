var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors')

var index = require('./routes/index');

// app
var app = express();

// cors
app.use(cors());

// views
app.set('views', path.join(__dirname, 'src'));

// engine
app.set('view enginer', 'ejs');
app.engine('html', require('ejs').renderFile);

// angular  dist
app.use(express.static(__dirname + '/dist'));

// body bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// route 
app.use('/', index);


// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});