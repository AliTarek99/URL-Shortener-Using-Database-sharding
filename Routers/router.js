const controller = require('../Controllers/controller');
const router = require('express').Router();

router.get('/:hash', controller.getURL);

router.post('/', controller.addURL);

module.exports = router;