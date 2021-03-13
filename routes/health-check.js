/* eslint-disable filenames/match-exported */
const express = require('express');

const router = express.Router();

const { status } = require('../controllers/health-check');

router.get('/healthcheck', status);

module.exports = router;
