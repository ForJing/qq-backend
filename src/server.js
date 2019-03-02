const mongoose = require('mongoose')
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const routeFiles = fs.readdirSync(path.resolve(__dirname, './routes'))

routeFiles.forEach(routeFile => {
  const absolutePath = path.resolve(__dirname, 'routes', routeFile)
  const route = require(absolutePath)
  app.use(route)
})

const PORT = 8888

// const mongo_url = process.env.mongodb_url
const mongo_url = 'mongodb://localhost:27017/qq'

mongoose.connect(mongo_url, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connect open!')

  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
  })
})
