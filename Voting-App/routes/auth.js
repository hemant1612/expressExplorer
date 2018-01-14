var express = require('express');
var passport = require('passport')
var router = express.Router();

/* GET home page. */



//auth with github
router.get('/github',
  passport.authenticate('github'));

//callback route for google to redirect to

router.get('/github/redirect', passport.authenticate('github', {failureRedirect : '/'}),
 (req,res)=>{
 //res.send(req.user);
 res.render('polls/mypolls', { user : req.user })
});




module.exports = router;
