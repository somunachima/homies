const PORT = 8000
const express = require('express')
const {MongoClient} = require('mongodb')
const {v1: uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const uri = "mongodb+srv://somakudu:homies2023@cluster.cixiijx.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.get('/', (req, res) => {
    res.json('Hello to my app')
})

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body

    const generatedUserId = uuidv4()
    const hashPassword = await bcrypt.hash(password, 10)

    try {
        client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const existingUser = users.findOne({email})

        if (existingUser) {
            return res.status(409).send('User already exists. Please login')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashed_password: hashPassword
        }
        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            exipresIn: 60 * 24,
        })

        res.status(201).json({token, userId: generatedUserId, email: sanitizedEmail})
    } catch (err) {
        console.log(err)
    }

})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } finally {
        await client.close()
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
