const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log(`url is ${url}`)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB, good job')
    })
    .catch((error) => {
        console.log(`error connecting to MongoDB:`, error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3
    },
    number: {
        type: String,
        minlength: 8,
        validate: {
            validator: function(num) {
                return /\d{2,3}-\d{4,}/.test(num)
            }
        }
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)