const express = require('express');
const { getShlokas } = require('../controllers/shlokaController');

const router = express.Router();

// Get all shlokas
router.get('/', getShlokas);

module.exports = router;