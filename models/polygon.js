var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PolygonSchema = new Schema({
  name: String,
  paths: Array,
  description: String
})

module.exports = mongoose.model('Polygon', PolygonSchema)
