import express from 'express'
import { connectDB } from './src/config/db.js'
import _middlewares from './src/middlewares/app.js'
import passport from 'passport'
import { linkedinOauth, twitterOauth } from './src/config/passport.js'

const app = express()

// strategies
linkedinOauth(passport)
twitterOauth(passport)

export const run = () => {

    _middlewares(app)

    connectDB()
        .then(() => {
            console.log('DB connected')

            app.listen(process.env.PORT, (err) => {
                    if (err) return 
                    console.log(`server started on port ${process.env.PORT}`)
            })

        })
         .catch(err => process.exit(1))
}
