var express = require('express')
var encodeUriQuery = require('encode-uri-query')
var mongoose = require('mongoose')
var serverReq = require('request')
var router = express.Router()

var Home = require('../models/home')

router.post('/save-data', function(request, response, next){
  var city = 'denver'
  var street_address = encodeUriQuery(request.body.street, true)
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${street_address}`
  var latlng

  serverReq({ url, json: true }, (err, res, body) => {
    var data = res.body.results[0]
    console.log(data)
    var lat = data.geometry.location.lat
    var lng = data.geometry.location.lng
    var formatted_address = data.formatted_address

    new Home({
      street_address: street_address,
      formatted_address: data.formatted_address,
      city: data.address_components[3].short_name,
      state: data.address_components[5].short_name,
      zipCode: data.address_components[7].short_name,
      price: request.body.price,
      latlng: {
        lat: lat,
        lng: lng
      }
    }).
    save(function(err, doc){
      if (err) return next(err)
      else return
      //if(err) res.json(err)
      //else return
    })
  })

  // WRITE A FUNCTION that uses geocode to translate street to lat/lng


})

module.exports = router
