'use strict'

var getRemote = require('./ajaxRequest')
var polygons = getRemote('polygons')

var fillColors = [ '#1CB841', '#CA3C3C', '#DF7514', '#42B8DD' ]

// WILL break b/c polygons in DB don't (all) have ltglng data
module.exports = function(map, el){

  var map = map
  var vertices = []

  var el = document.getElementById(el)
  el.addEventListener('click', function(e) {
    e.preventDefault()

    polygons.forEach(function(polygon, idx){
      polygon.paths.forEach(function(path){
        vertices.push({ lat: path.lat, lng: path.lng })
      })

      var newPolygon = new google.maps.Polygon({
        paths: vertices,
        map: map,
        strokeColor: fillColors[idx],
        fillColor: fillColors[idx],
        fillOpacity: 0.25
      })
    })

  })
}
