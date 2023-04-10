const PORT = 8000
const express = require('express')
const {MongoClient} = require('mongodb')
const uri = 'mongodb+srv://somakudu:thepassword@cluster.cixiijx.mongodb.net/?retryWrites=true&w=majority'

const app = express()



app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
