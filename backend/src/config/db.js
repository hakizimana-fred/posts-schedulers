import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
}