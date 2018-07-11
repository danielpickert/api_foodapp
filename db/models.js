const mongoose = require('./connection.js')

const UserSchema = new mongoose.Schema({
	name: String,
	password: String
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }