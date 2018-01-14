var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mypolls', function(req, res, next) {
  //fetch this data from db
  res.render('polls/mypolls.hbs');
});


router.get('/createpoll', function(req, res, next) {
  //fetch this data from db
  res.render('polls/createpoll.hbs');
});

module.exports = router;
