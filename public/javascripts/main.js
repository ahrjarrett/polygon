(function(){

  var R = require('ramda')

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
    var saveHomes = require('./saveHomes')
    var showPoly = require('./showPoly')
    var savePoly = require('./savePoly')

    var mapDiv = 'map-canvas'
    var mapOpts = opts.mapOpts

    map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

    var polyOpts = opts.polyOpts
    var polygon = new google.maps.Polygon(polyOpts)
    polygon.setMap(map)

    var currentPath = polygon.getPath()
    google.maps.event.addListener(map, 'click', function(e) {
      if(currentPath.length < 7) currentPath.push(e.latLng)
    })

    showHomes(map, polygon, markers, results, 'show-homes')
    logHomes(map, polygon, 'log-homes')
    logCoordinates(map, polygon, 'log-coordinates')
    logPath(map, currentPath, 'log-path')
    showPoly('show-poly', 'poly-log')
    undoPin('undo-point')

    // ORDER is important here b/c we need to get the new path just before saving
    var newPath = polygon.getPath()
    savePoly(map, newPath, 'save-poly')
    saveHomes(map, 'save-home')

  }
  window.onload = initMap

}())
