const PORT = 8000
const express = require('express')
const {MongoClient, ServerApiVersion} = require('mongodb')
const uri = "mongodb+srv://somakudu:homies2023@cluster.cixiijx.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.get('/', (req, res) => {
    res.json('Hello to my app')
})

app.get('/signup', (req, res) => {
  res.json('Hello to my app')
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
