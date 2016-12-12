(function(){

  var R = require('ramda')
  //var homes = require('../../db/data.json')

  var map
  var markers = []
  var results = []

  function initMap() {
    var opts = require('./opts')
    var undoPin = require('./undoPin')
    var logPath = require('./logPath')
    var logCoordinates = require('./logCoordinates')
    var logHomes = require('./logHomes')
    var showHomes = require('./showHomes')

    var mapDiv = 'map-canvas'
    var mapOpts = opts.mapOpts

    map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

    var polyOpts = opts.polyOpts
    var polygon = new google.maps.Polygon(polyOpts)
    polygon.setMap(map)

    var currentPath = polygon.getPath()
    google.maps.event.addListener(map, 'click', function(e) {
      if(currentPath.length < 6) currentPath.push(e.latLng)
    })

    showHomes(map, polygon, markers, results, 'show-homes')
    logHomes(map, polygon, 'log-homes')
    logCoordinates(map, polygon, 'log-coordinates')
    logPath(currentPath, 'log-path')
    undoPin('undo-point')

  }
  window.onload = initMap

}())
