'use strict'

var express = require('express')
var encodeUriQuery = require('encode-uri-query')
var mongoose = require('mongoose')
var serverReq = require('request')
var router = express.Router()

var Home = require('../models/home')

router.post('/save-home', function(request, response, next){
  var city = 'denver'
  var street_address = encodeUriQuery(request.body.street, true)
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${street_address}`
  var latlng

  // be careful not to mix up this structure w/ the home model
  serverReq({ url, json: true }, (err, res, body) => {
    new Home({
      street_address: street_address,
      //formatted_address: data.formatted_address,
      price: request.body.price,
      latlng: {
        lat: lat,
        lng: lng
      }
    }).
    save(function(err, data){
      var data = res.body.results[0]
      var lat = data.geometry.location.lat
      var lng = data.geometry.location.lng
      var formatted_address = data.formatted_address

      if (err) next()
      else return

    })
  })

})

module.exports = router
