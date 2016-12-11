var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()

var Schema = mongoose.Schema
mongoose.model('home', new Schema({
  formatted_address: String
}, { collection: 'homes_test' }))

// GOT DATABASE TO POST!
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps Polygon' })
})

router.get('/homes', function(req, res, next){
  mongoose.model('home').find(function(err, homes){
    res.json(homes)
  })
})

// ADD FUNCTIONALITY TO SAVE POLYGON COORDINATES (R.lensProp?)
// form in index.jade posts to '/save-data' for now

module.exports = router

