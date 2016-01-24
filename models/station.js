//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var stationSchema = mongoose.Schema({
	name: String,
	city: String,
	temperature: Number
});

// var Stations = restful.model('stations', StationSchema);
// Stations.methods(['get','put', 'post', 'delete']);
// Stations.register(app, '/api/stations');

//Return model

module.exports = restful.model('Stations', stationSchema);