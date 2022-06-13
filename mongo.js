const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://milla-fullstack:${password}@cluster0.r7bg8.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const newName = process.argv[3]
const newNumber = process.argv[4]
console.log(`additional args: name ${newName}, number ${newNumber}`)

if (newName !== undefined && newNumber !== undefined) {
    console.log('additional args were not undefined')
    const person = new Person({
        name: newName,
        number: newNumber
    })

    person.save().then(result => {
        console.log(`added ${newName} number ${newNumber} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}