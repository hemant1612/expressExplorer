const router = require('express').Router();
const passport = require('passport')

console.log()

//auth login
// router.get('/login',(req,res) => {
//   res.render('login');
// })
//
//auth logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
})

//auth with google
router.get( '/google',passport.authenticate('google',{
  scope:['profile']
}));

//callback route for google to redirect to

router.get('/google/redirect',passport.authenticate('google'), (req,res)=>{
 //res.send(req.user);
 res.redirect('/user');
});

module.exports = router;
