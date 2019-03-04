const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
  User.find((err, result) => {
    if (!err) {
      res.json(result)
    }
  })
})

router.get('/save', (req, res) => {
  const user = new User({
    qq: '123456',
    password: '123456',
    nickname: 'Dearest',
  })
  if (user.save()) {
    res.redirect('/users')
  }
})

router.get('/:qq', (req, res) => {
  const { qq } = req.params
  User.find({ qq }, (err, result) => {
    if (!err) {
      res.json(result)
    }
  })
})

module.exports = ['/users', router]
