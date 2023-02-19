const express = require('express');

let router = express.Router();

const mainController = require('../controllers/main.controller');

// HTTP Verbs
router.post('/providers', mainController.create)
router.get('/providers', mainController.readAll)
router.get('/providers/:id', mainController.readOne)
router.put('/providers/:id', mainController.update)
router.delete('/providers/:id', mainController.deleteOne)
router.delete('/providers', mainController.deleteAll)

module.exports = router;