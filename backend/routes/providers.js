var express = require('express');
var router = express.Router();

const providersController = require('../controllers/providers');

/* GET list page. */
router.get('/', providersController.list);
// GET details page
router.get('/details/:id', providersController.details);



module.exports = router;
