const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contact.controller')

// Create
router.post('/create', contactController.createContact)

// Get list
router.get('/list', (contactController.getList))

// Read
router.get('/:id', contactController.getContact)

// Update
router.put('/:id/update', contactController.updateContact)

// Delete
router.delete('/:id/delete', contactController.deleteContact)

module.exports = router
