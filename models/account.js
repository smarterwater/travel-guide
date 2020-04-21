const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const accountSchema = new mongoose.Schema ({
    username: String,
    email: String,
    password: String,
})

accountSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Account', accountSchema)