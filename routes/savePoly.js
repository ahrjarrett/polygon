var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()
var Schema = mongoose.Schema
var Polygon = require('../models/polygon.js')

//mongoose.model('Polygon', new Schema({
//  _id: Schema.ObjectId,
//  name: String,
//  paths: [
//    { lat: Number, lng: Number }
//  ]
//}))

router.post('/save-poly', function(req, res, next){

  var newPath = [
    { lat: 39.98869501604662, lng: -105.02543449401855},
    { lat: 39.82013946676259, lng: -105.10233879089355},
    { lat: 39.7631584037253, lng: -104.55851554870605},
    { lat: 39.84755795735592, lng: -104.6546459197998},
    { lat: 40.01289077952615, lng: -104.62306022644043},
    { lat: 40.029717557833266, lng: -104.90870475769043}
  ]

  mongoose.model('Polygon').findOne({ name: req.body.name }, function(err, takenName){
    if (takenName) { console.log('A polygon with that name already exists.') }
    else { polygon.save(function(err, polygon) {
      if (err) return next(err)
      var polygon = new Polygon({ name: req.body.name, paths: newPath })
      return res.redirect('/homes')
      })
    }
  })
})

module.exports = router


