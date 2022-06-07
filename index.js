const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323423"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-34-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Welcome to the phonebook!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const personsNum = persons.length
    const date = new Date()

    response.send(
        `<p>Phonebook has info on ${personsNum} people</p>
        <p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    const person = {
        id: createId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    response.json(person)
})

const createId = () => {
    return Math.floor(Math.random() * Number.MAX_VALUE)
}

const PORT = 3001
app.listen(PORT)

console.log(`Server is running on ${PORT}`)