'use strict'

var getRemote = require('./ajaxRequest')
var polygons = getRemote('polygons')

var fillColors = [ '#1CB841', '#CA3C3C', '#DF7514', '#42B8DD' ]

// this WILL breaks b/c polygons in DB don't all have ltglng data
module.exports = function(map){

  var map = map
  var vertices = []

  polygons.forEach(function(polygon){
    polygon.paths.forEach(function(path){
      vertices.push({ lat: polygon.path.lat, lng: polygon.path.lng })
    })

    var newPolygon = new google.maps.Polygon({
      paths: vertices,
      map: map,
      strokeColor: '#ff0000',
      fillColor: '#ff0000',
      fillOpacity: 0.25
    })

  })
}
