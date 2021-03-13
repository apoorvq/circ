const express = require('express');

const router = express.Router();

const { getCirculatingSupply } = require('../controllers/trees');

router.get('/circulating-supply', getCirculatingSupply);
module.exports = router;
