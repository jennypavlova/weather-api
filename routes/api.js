//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Station = require('../models/station')

//Routes
Station.methods(['get', 'put', 'post', 'delete']);
Station.register(router, '/stations');

//Return router
module.exports = router;