var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;

/* GET home page. */
router.get('/', function(req, res, next) {
	
 	// var sess = req.session
  // if (sess.views) {
  //   sess.views++
  //   res.setHeader('Content-Type', 'text/html')
  //   res.write('<p>views: ' + sess.views + '</p>')
  //   res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
  //   res.end()
  // } else {
  //   sess.views = 1
  //   res.end('welcome to the session demo. refresh!')
  // }
 	
   //res.send('Your Awesome.');

  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.send('respond with a testaaa');
});


module.exports = router;
