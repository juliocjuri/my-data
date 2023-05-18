const express = require('express');
const router = express.Router();

const applicationController = require('../controllers/applicationController');

router.get('/findHighestConsuming', applicationController.findHighestConsuming)

module.exports = router