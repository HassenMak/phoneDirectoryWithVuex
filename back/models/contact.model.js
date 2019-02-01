const mongoose = require('mongoose')

const { Schema } = mongoose

let ContactSchema = new Schema({
	firstName: String,
	lastName: String,
	phoneNumber: Number,
	emailAddress: String
})

// Export model
module.exports = mongoose.model('Contact', ContactSchema)
