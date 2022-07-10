import { Router } from 'express'
import passport from 'passport'
import request from "request";

const router = Router()


router.get('/auth/linkedin', passport.authenticate('linkedin'))
router.get('/auth/twitter', passport.authenticate('twitter'))


// callback urls
router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/failed', session: true }),
  function (req, res) {
    res.redirect('http://localhost:3000');
});


router.get('/failed', (req, res) => res.send('FAILED TO LOGIN'))

router.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  });



router.get('/auth/tumblr', (req, res) => {
    var oauth ={
        consumer_key: '',
        consumer_secret: '',
    };
    var url = 'https://www.tumblr.com/oauth/request_token'
    
    request.post({url:url, oauth:oauth}, function (e, r, body) {
      var temp1 = body.split("&");
       var auth_token=temp1[0].split("=")[1];
       var auth_secret=temp1[1].split("=")[1];
       var tokens=[auth_token,auth_secret];
       const oauthToken = temp1[0].split('=')[1]
       const oauthSecret = temp1[1].split('=')[1]

       return res.redirect(`https://www.tumblr.com/oauth/authorize?oauth_token=${auth_token}`)
    })
})

export default router