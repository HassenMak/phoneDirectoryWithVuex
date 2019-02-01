const Contact = require('../models/contact.model')

// Simple version, without validation or sanitation
exports.test = function (req, res) {
	res.send('Greetings from the Test controller!')
}

exports.createContact = function (req, res) {
	// Create a new instance of our model
	console.log(req.body)
	let contact = new Contact(
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber,
			emailAddress: req.body.emailAddress
		}
	)
	contact.save(function (err) {
		if (err) {
			throw err
		}
		res.send('Product created successfully')
	}
	)
}

exports.getContact = function (req, res) {
	Contact.findById(req.params.id, function (err, contact) {
		if (err) throw err
		res.send(contact)
	})
}

exports.updateContact = function (req, res) {
	Contact.findOneAndUpdate(
		req.params.id,
		{ $set: req.body },
		function (err, contact) {
			if (err) throw err
			res.send('Product updated')
		})
}

exports.deleteContact = function (req, res) {
	Contact.findOneAndDelete(req.params.id, function (err) {
		if (err) throw (err)
		res.send('Deleted successfully')
	})
}

exports.getList = function (req, res) {
	Contact.find(function (err, result) {
		if (err) throw err
		res.send(result)
	})
}
