var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()
//var Home = require('../models/home')

var Schema = mongoose.Schema
var HomeSchema = new Schema({
  name: String,
  paths: [{ lat: Number, lng: Number }],
  description: String
})
mongoose.model('homes', HomeSchema, 'homes_test' )

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps Polygon' })
})

router.get('/homes', function(req, res, next){
  mongoose.model('homes').find(function(err, homes){
    res.json(homes)
  })
})

router.get('/homes/:id', function(req, res, next){
  mongoose.model('homes').find({ _id: req.params.id }, function(err, home){
    res.json(home)
  })
})

module.exports = router

