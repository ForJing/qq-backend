const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    code: 0,
    data: 'hello world',
  })
})

module.exports = ['/', router]
