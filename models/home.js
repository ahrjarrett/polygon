'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var homeSchema = new Schema({
  id: Schema.ObjectId,
  street_address: String,
  formatted_address: String,
  price: Number,
  latlng: {
    lat: Number,
    lng: Number
  }
}, { collection: 'homes_tests' })

module.exports = mongoose.model('homes', homeSchema)
