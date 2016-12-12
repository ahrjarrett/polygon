var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HomeSchema = new Schema({
  id: Schema.ObjectId,
  street_address: String,
  formatted_address: String,
  city: String,
  state: String,
  zipCode: Number,
  price: Number,
  latlng: {
    lat: Number,
    lng: Number
  }
})

module.exports = mongoose.model('homes_test', HomeSchema)
