import { Strategy as LinkedInStrategy } from 'passport-linkedin'
import { Strategy as TwitterStrategy } from 'passport-twitter'

export function linkedinOauth(passport) {

    passport.use(new LinkedInStrategy({
        consumerKey: process.env.LINKEDIN_KEY,
        consumerSecret: process.env.LINKEDIN_KEY,
        callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    },
    function(token, tokenSecret, profile, done) {
        console.log(profile)
    }
    ));
}

export function twitterOauth(passport) {
    passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_KEY,
        consumerSecret: process.env.TWITTER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, cb) {
        console.log(profile)
        
      }
    ));
}