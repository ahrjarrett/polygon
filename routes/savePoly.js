var express = require('express')
var mongoose = require('mongoose')
var router = express.Router()
var Polygon = require('../models/polygon')
var savePoly = require('../public/javascripts/savePoly')

router.post('/save-poly', function(req, res, next){

  mongoose.model('Polygon').findOne({ name: req.body.name }, function(err, takenName){
    if (takenName) {
      console.log('A polygon with that name already exists.')
      next()
    }
    if (!req.body.name) {
      console.log('A name is mandatory!')
      next()
    }
    else { polygon.save(function(err, polygon) {
      if (err) return next(err)
      var polygon = new Polygon({ name: req.body.name, paths: path })
      //return res.redirect('/homes')
      })
    }
  })
})

module.exports = router


