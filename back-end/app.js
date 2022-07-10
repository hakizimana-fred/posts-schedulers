import express from 'express'
import passport from 'passport'
import { connectDB } from './src/config/db.js'
import { linkedinOauth, twitterOauth } from './src/config/passport.js'
import _middlewares from './src/middlewares/app.js'



const app = express()

export const run = () => {

    _middlewares(app)
    // Strategies
    linkedinOauth(passport)
    twitterOauth(passport)

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
