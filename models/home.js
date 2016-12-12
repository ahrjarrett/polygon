var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HomeSchema = new Schema({
  id: Schema.ObjectId,
  formatted_address: String,
  geometry: {
    price: Number,
    location: {
      lat: Number,
      lng: Number
    }
  }
})

module.exports = mongoose.model('homes_test', HomeSchema)
