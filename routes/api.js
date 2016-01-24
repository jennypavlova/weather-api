//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Station = require('../models/station')
  
//Routes
Station.methods(['get']);
Station.register(router, '/station');

//Return router
module.exports = router;