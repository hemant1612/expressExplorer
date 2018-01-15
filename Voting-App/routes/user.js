const express = require('express');
const Poll = require('../Model/poll-model');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //fetch this data from db
  //res.end(JSON.stringify(req.user))
  Poll.find({userId : req.user.googleId}, (err,docs)=>{
     res.render('polls/mypolls', {user: req.user, data: docs });
 })

});

router.get('/create', (req, res, next) => {
  //fetch this data from db
  res.render('polls/createpoll.hbs');
});

router.post('/create', (req, res, next) => {
  const pollOptions = [];
  req.body.polloption.split("\r\n").forEach((val) => {
    let obj = Object.create(null);
    obj['title'] = val;
    obj['votes'] = 0;
    pollOptions.push(obj);
  })
  new Poll({userId: req.user.googleId, topic: req.body.poll, options: pollOptions}).save().then((newPoll) => {
  console.log('new user created!')
  res.redirect('/user');
   })
})

module.exports = router;
