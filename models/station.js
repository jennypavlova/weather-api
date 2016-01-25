//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var stationSchema = mongoose.Schema({
  city: String,
	temperature: Number,
  lon: Number,
  lat: Number
});

//Return model
module.exports = restful.model('Station', stationSchema);