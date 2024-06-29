const controller = require('../Controllers/controller');
const router = require('express').Router();

router.get('/:id', controller.getURL);

router.post('/', controller.addURL);