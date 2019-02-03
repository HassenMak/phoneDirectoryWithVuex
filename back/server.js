const express = require('express')
const bodyParser = require('body-parser')

const app = express()
let port = 8081

// use bodyparser to parse incoming request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set up mongoose connection
const mongoose = require('mongoose')

let localDbUrl = 'mongodb://localhost:27017/phoneDirectory'
let mongoDB = process.env.MONGODB_URI || localDbUrl

mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise

let db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function () {
	console.log('The server is connected to the database')
})

// Allow CORS
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
	next()
})
app.get('/', function (req, res, next) {
})

// Set up routes
const contactRoutes = require('./routes/contact.routes') // Import routes for contact
app.use('/contacts', contactRoutes)

app.listen(port, () => {
	console.log('Server is up and running on port number ' + port)
})
