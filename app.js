const express = require('express')
const app = express()
const cors = require('cors')
const accountsRouter = require('./controllers/accounts')
const path = require('path');           
const mongoose = require('mongoose')
const config = require('./config')

app.use(cors())
app.use(express.json())
app.use('/api/accounts', accountsRouter)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database.')
    })
    .catch((error) => {
        console.log('Error: ' + error)
    })

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

module.exports = app

