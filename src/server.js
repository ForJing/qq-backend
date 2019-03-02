const mongoose = require('mongoose')
const express = require('express')
const app = express()

const PORT = 8888

const mongo_url = process.env.mongodb_url

mongoose.connect(mongo_url, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connect open!')

  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
  })
})
