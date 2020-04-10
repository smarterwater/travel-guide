const express = require('express')
const app = express()
const cors = require('cors')
const accountsRouter = require('./controllers/accounts')
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database.')
    })
    .catch((error) => {
        console.log('Error: ' + error)
    })

// app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use('/', accountsRouter)

module.exports = app

