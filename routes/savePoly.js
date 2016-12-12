var express = require('express')
var mongoose = require('mongoose')
var request = require('request')
var router = express.Router()
var savePoly = require('../public/javascripts/savePoly')
var Home = require('../models/home')
var Polygon = require('../models/polygon')

router.get('/polygons', function(req, res, next) {
  mongoose.model('Polygon').find(function(err, polygons) {
    res.json(polygons)
  })
})

router.get('/polygons/:id', function(req, res, next) {
  mongoose.model('Polygon').find({ _id: req.params.id }, function(err, polygon){
    res.json(polygon)
  })
})


// THIS WORKS!!
// now get the text value of req.body.paths

router.post('/save-poly', function(req, res, next){
  if (typeof req.body.paths == 'string') return next(err)
  new Polygon({
    name: req.body.name,
    paths: paths,
    description: req.body.description
  }).
  save(function(err, doc){
    if(err) res.json(err)
    else res.send('Successfully inserted!' + paths)
  })
})

module.exports = router
