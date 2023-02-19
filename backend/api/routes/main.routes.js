const express = require('express');

const router = express.Router()

const mainController = require('../controllers/main.controller');

// HTTP Verbs
router.post('/providers', mainController.create)
router.get('/providers', mainController.readAll)
router.get('/providers/:id', mainController.readOne)
router.put('/providers', mainController.update)
router.delete('/provider/:id', mainController.deleteOne)
router.delete('/provider', mainController.deleteAll)

module.exports = router;