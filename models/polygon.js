var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PolygonSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  paths: [
    { lat: Number, lng: Number }
  ]
})

module.exports = mongoose.model('Polygon', PolygonSchema)
