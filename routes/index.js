var express = require('express');
var router = express.Router();

var users = [
	{
		name: 
	}
];
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('index.html', { root: 'public' });
});

module.exports = router;
