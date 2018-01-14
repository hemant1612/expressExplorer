var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //fetch this data from db
  //res.end(req.user)
  res.render('polls/mypolls', {user: req.user});
});


router.get('/create', function(req, res, next) {
  //fetch this data from db
  res.render('polls/createpoll.hbs');
});

module.exports = router;
