const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userShema = new Schema(
  {
    qq: {
      type: String,
      minlength: 6,
    },
    password: {
      type: String,
      minlength: 6,
    },
    nickname: String,
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userShema)

module.exports = User
