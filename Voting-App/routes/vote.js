var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //fetch this data from db
  res.render('votes/vote');
});

module.exports = router;
