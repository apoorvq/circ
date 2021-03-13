/* eslint-disable filenames/match-exported */
const express = require('express');

const router = express.Router();

const Ping = require('../controllers/ping');

router.get('/ping', Ping.status);

module.exports = router;
