import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import session from 'express-session'
import passport from 'passport'


const appMiddlewares = (app) => {
    app.use(express.json())
    app.use(session({
        secret: "secret",
        resave: false ,
        saveUninitialized: true ,
      }))

    app.use(passport.initialize()) 
    app.use(passport.session())   

    app.use(helmet())
    app.use(cors({
        credentials: true,
        origin: '*'
    }))
    app.use(compression())
}

export default appMiddlewares