var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Maps Polygon' })
})

// ADD FUNCTIONALITY TO SAVE POLYGON COORDINATES (R.lensProp?)

module.exports = router

