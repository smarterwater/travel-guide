const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const tripSchema = new mongoose.Schema ({
    // email: String,
    // password: String,
})

tripSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Trip', tripSchema)