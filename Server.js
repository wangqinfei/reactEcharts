var express = require('express');
var session = require('express-session');
var path = require('path');
//var compression = require('compression')
var routes = require('./routes/api');

var app = express();

//app.use(compression())
app.set('view engine', 'ejs');
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  name:'sid',
  secret: 'K5EfWMujNTunxFlOfDT3PP7NPLY',
  resave: false,
  saveUninitialized: true
}));

app.use('/api', routes);

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

var PORT = process.env.PORT || 8089;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
