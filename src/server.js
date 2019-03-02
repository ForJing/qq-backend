const express = require('express')

const app = express()

const mongo_url = process.env.mongodb_url

console.log('mongo_url', mongo_url)
