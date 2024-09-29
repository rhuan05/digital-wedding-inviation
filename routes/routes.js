const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const adminController = require('../controllers/adminController');

router.get('/', homeController.renderHome);

router.get('/admin', adminController.renderAdmin);

module.exports = router;