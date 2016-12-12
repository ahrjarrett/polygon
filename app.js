var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var fs = require('fs')
var logger = require('morgan')
var mongoose = require('mongoose')
var path = require('path')

var app = express()

var index = require('./routes/index')
var homeRoutes = require('./routes/saveHome')
var polyRoutes = require('./routes/savePoly')

mongoose.connect('mongodb://admin:rootbeer@ds127968.mlab.com:27968/gmaps_polygon', function(err) {
  if (err) { console.log(err) }
  else { console.log('connected to db') }
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.use('/', index)
app.use(polyRoutes)
app.use(homeRoutes)

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
