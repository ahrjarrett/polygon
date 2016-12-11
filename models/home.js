var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HomeSchema = new Schema({
  id: ObjectId,
  formatted_address: String,
  price: Number,
  location: {
    lat: Number,
    lng: Number
  }
})

module.exports = mongoose.model('Home', HomeSchema)
