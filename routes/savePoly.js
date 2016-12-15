'use strict'

var express = require('express')
var mongoose = require('mongoose')
var request = require('request')
var router = express.Router()
//var savePoly = require('../public/javascripts/savePoly')
var Polygon = require('../models/polygon')

router.get('/polygons', function(req, res, next) {
  mongoose.model('Polygon').find(function(err, polygons) {
    res.json(polygons)
  })
})

router.get('/polygons/:id', function(req, res, next) {
  mongoose.model('Polygon').findOne({ _id: req.params.id }, function(err, polygon){
    res.json(polygon)
  })
})

// THIS WORKS--now get the innerText of req.body.paths
router.post('/save-poly', function(req, res, next){

  // is this bit of code necessary? i don't think so...
  //mongoose.model('Polygon').find(function(err, polygons) {
  //  res.json(polygons)
  //})

  new Polygon({
    name: req.body.name,
    paths: req.body.paths,
    description: req.body.description
  }).
  save(function(err, doc){
    if(err) return next(err)
    else res.send('Successfully inserted!' + doc)
  })
})

module.exports = router
