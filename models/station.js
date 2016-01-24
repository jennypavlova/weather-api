//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var stationSchema = mongoose.Schema({
	name: String,
	city: String,
	temperature: Number
});

//Return model
module.exports = restful.model('Station', stationSchema);