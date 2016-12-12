var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PolygonSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  coordinates: [

  ]
})
