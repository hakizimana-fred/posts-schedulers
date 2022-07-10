import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import session from 'express-session'
import passport from 'passport'
import auths from '../routes/auths.js'


const appMiddlewares = (app) => {

    app.use(express.json())
    app.use(cors({
        credentials: true,
        origin: 'http://localhost:3000'
    }))
    app.set("trust proxy", 1);

    app.use(
        session({
          secret: "secretcode",
          resave: true,
          saveUninitialized: true,
          cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 
          }
        }))

        app.use(passport.initialize());
        app.use(passport.session());   


    // Application Routes
    app.get('/', (req, res) =>  res.send('Testing Route')) 
    app.get('/api/tumblr/callback', (req, res) => res.send('hello tumbs'))
     
    app.use('/', auths)
    app.get('/user', (req, res) => res.json(req.user))



    app.get("/auth/logout", (req, res) => {
    if (req.user) {
        req.logout();
    }
   })

}

export default appMiddlewares