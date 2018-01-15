var express = require('express');
var router = express.Router();
const Poll = require('../Model/poll-model');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  //fetch this data from db
  //console.log(req.params.id)
  Poll.findOne({ "_id" : req.params.id },(err, poll)=> {
    if (err) throw err;
    res.render('votes/vote',{data: poll});

  })
});

module.exports = router;
