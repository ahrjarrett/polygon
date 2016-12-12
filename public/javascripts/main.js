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
    var savePoly = require('./savePoly')

    var mapDiv = 'map-canvas'
    var mapOpts = opts.mapOpts

    var newPath = [
      { lat: 39.98869501604662, lng: -105.02543449401855},
      { lat: 39.82013946676259, lng: -105.10233879089355},
      { lat: 39.7631584037253, lng: -104.55851554870605},
      { lat: 39.84755795735592, lng: -104.6546459197998},
      { lat: 40.01289077952615, lng: -104.62306022644043},
      { lat: 40.029717557833266, lng: -104.90870475769043}
    ]

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
    undoPin('undo-point')
    savePoly(map, newPath, 'save-poly')

  }
  window.onload = initMap

}())
