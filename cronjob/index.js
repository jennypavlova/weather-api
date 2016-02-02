var request = require("request");
var async = require("async");
var Station = require('../models/station');

var cities = [{
  name: "London",
  country: "uk"
}, {
  name: "Manchester",
  country: "en"
}, {
  name: "Sofia",
  country: "bg"
}, {
  name: "New York",
  country: "us"
}, {
  name: "Berlin",
  country: "de"
}, {
  name: "Munich",
  country: "de"
}, {
  name: "Hamburg",
  country: "de"
},{
  name: "Hanover",
  country: "de"
}, {
  name: "Vien",
  country: "au"
}, {
  name: "Salzburg",
  country: "au"
}, {
  name: "Amsterdam",
  country: "nl"
}, {
  name: "Moskaw",
  country: "ru"
}, {
  name: "Tokyo",
  country: "jp"
}, {
  name: "Paris",
  country: "fr"
}, {
  name: "Leon",
  country: "fr"
}, {
  name: "Rome",
  country: "it"
}, {
  name: "Milan",
  country: "it"
}, {
  name: "Venice",
  country: "it"
}, {
  name: "Beijing",
  country: "ch"
}, {
  name: "Madrid",
  country: "sp"
}, {
  name: "Plovdiv",
  country: "fr"
}, {
  name: "Varna",
  country: "bg"
}];
var weatherApiKey = "44db6a862fba0b067b1930da0d769e98";
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98

setInterval(function () {
  console.log(new Date(), "cronjob started");

  // remove all old entries
  Station.remove({}, function(err) {

    async.eachSeries(cities, function(city, next){

      var url = "http://api.openweathermap.org/data/2.5/weather?q=" +
      city.name + "," + city.country +
      "&appid=" + weatherApiKey + "&units=metric";
      
      request.get({
        url: url,
        json: true
      }, function(err, response) {
        if (err) {
          console.error(new Date, err);
          //log and continue
          return next();
        }

        Station.create({
          city: response.body.name,
          temperature: response.body.main.temp,
          lon: response.body.coord.lon,
          lat: response.body.coord.lat
        }, function(err, station) {
          if (err) {
            console.error(new Date, err);
            //log and continue
            return next();
          }
          console.log(new Date(), "Added station", station.city, station.temperature);
          next();
        });
      });
    }, function(err){
      console.log("done");
    });
  });
}, 120000);