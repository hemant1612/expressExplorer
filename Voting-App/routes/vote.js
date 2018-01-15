var express = require('express');
var router = express.Router();
const Poll = require('../Model/poll-model');
const User = require('../Model/user-model');
const alert = require('../public/javascripts/req');
var passport = require('passport')
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  //fetch this data from db
  //console.log(req.params.id)
   console.log(req.user)
  Poll.findOne({
    "_id": req.params.id
  }, (err, poll) => {
    if (err)
      res.end('404 Not Found')
    if (poll) {
      var options = [];
      var votes = [];

      poll.options.forEach((val) => {
        options.push(val.title);
        votes.push(val.votes);

      })



    const voted = function() {
      if (!req.user || poll.votedby.length === 0)
        return false;
      for (let i = 0; i < poll.votedby.length; i++) {
        console.log(req.user.googleId, poll.votedby[i])
        if (req.user.googleId == poll.votedby[i]) {
          return true;
        } else
          continue;
        return false;
      }

    }

    res.render('votes/vote', {
      data: poll,
      option: options,
      vote: votes,
      voteIn: voted(),
      user: req.user
    });
}
else
res.end('404 Not Found!')
  })
});

router.post('/:id', function(req, res, next) {

  //fetch this data from db
  //console.log(JSON.stringify(req.user))
  //console.log(req.params.id)
  //console.log(req.user)
  //console.log(req.user.googleId)
  //console.log(req.body.vote)
  //console.log(req.user.googleId)
  Poll.findOne({
    "_id": req.params.id,
    "votedby": req.user.googleId
  }, (err, doc) => {
    if (doc) {
      console.log('You have already voted for this poll !')
      res.redirect('/vote/' + req.params.id);

    } else {
      Poll.update({
        "_id": req.params.id,
        'options.title': req.body.vote
      }, {
        $inc: {
          'options.$.votes': 1
        },
        $push: {
          'votedby': req.user.googleId
        }
      }).then((err, no) => {
        console.log(err)
        res.redirect('/vote/' + req.params.id);
      })
    }
  })

})

module.exports = router;
