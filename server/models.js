const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hobbies: [String]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User