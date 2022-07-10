import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    twitterId: {required: false, type: String},
    twitterAccessToken: {required: false, type: String},
    linkedinId: {required: false, type: String},
    linkedinAccessToken: {required: false, type: String},
    username: {required: true, type: String}
})


export default mongoose.model('User', userSchema)