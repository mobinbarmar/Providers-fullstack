var express = require('express');
var router = express.Router();

const providerController = require('../controllers/providers');

/* GET list page. */
router.get('/', providerController.list);



module.exports = router;
