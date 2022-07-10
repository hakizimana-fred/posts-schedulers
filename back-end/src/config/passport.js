import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2'
import { Strategy as TwitterStrategy } from 'passport-twitter'
import passport from 'passport'
import User from '../model/User.js'


export function linkedinOauth(passport) {

    passport.use(new LinkedInStrategy({
        clientID: process.env.LINKEDIN_KEY,
        clientSecret: process.env.LINKEDIN_SECRET,
        callbackURL: "/auth/linkedin/callback",
        scope: ['r_emailaddress', 'r_liteprofile', 'w_member_social']
    },
    async function(accessToken, refreshToken, profile, done) {
        const user = await User.findOne({linkedinId: profile.id})
        if (!user) {
            const newUser = new User({linkedinId: profile.id, username: profile.displayName})
            await newUser.save()
            done(null, newUser)
        }
        done(null, user)
    }
));
}

export function twitterOauth(passport) {
    passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_KEY,
        consumerSecret: process.env.TWITTER_SECRET,
        callbackURL: "/auth/twitter/callback"
      },
      async function(token, tokenSecret, profile, done) {
        const user = await User.findOne({twitterId: profile.id})
        if (!user) {
            const newUser = new User({twitterId: profile.id, username: profile.username})
            await newUser.save()
            done(null, newUser)
        }
        done(null, user)
        
      }
    ));
}


passport.serializeUser((user, done) => {
    return done(null, user);
  });
  
  passport.deserializeUser((user, done) => {

      return done(null, user);
    
  })
