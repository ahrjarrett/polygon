;(function(){

  'use strict'

  var map
  var markers = []
  var R = require('ramda')

  function initMap() {
    //var clearMap = require('./clearMap')
    var logPath = require('./logPath')
    var logCoordinates = require('./logCoordinates')
    var logHomes = require('./logHomes')
    var opts = require('./opts')
    var renderPolygon = require('./renderPolygon')
    var saveHomes = require('./saveHomes')
    var showHomes = require('./showHomes')
    var savePoly = require('./savePoly')
    var showPoly = require('./showPoly')
    var undoPin = require('./undoPin')

    var mapDiv = 'map-canvas'
    var mapOpts = opts.mapOpts
    var results = []

    map = new google.maps.Map(document.getElementById(mapDiv), mapOpts)

    /* these 3 paragraphs allow infowindows that are clickable even while
     * overlapping with a rendered polygon
     */
    //var testMarker = new google.maps.Marker({
    //  position: { lat: 39.7758249410587, lng: -104.9732494354248 },
    //  map: map,
    //  title: 'test marker'
    //})

    //var infowindow = new google.maps.InfoWindow({
    //  content: 'testing infowindow: does this pop up?'
    //})

    //testMarker.addListener('click', function(){
    //  infowindow.open(map, testMarker)
    //})


    var polyOpts = opts.polyOpts
    var polygon = new google.maps.Polygon(polyOpts)
    polygon.setMap(map)

    var currentPath = polygon.getPath()
    google.maps.event.addListener(map, 'click', function(e) {
      if(currentPath.length < 7) currentPath.push(e.latLng)
    })

    renderPolygon(map, 'show-all-poly')
    showHomes(map, polygon, markers, results, 'show-homes')
    showPoly('show-poly', 'poly-log')
    logHomes(map, polygon, 'log-homes')
    logCoordinates(map, polygon, 'log-coordinates')
    logPath(map, currentPath, 'log-path')
    undoPin('undo-point')

    // order of newPath is important here b/c we need to load just before saving
    var newPath = polygon.getPath()
    //savePoly(map, newPath, 'save-poly')
    saveHomes(map, 'save-home')

  }
  window.onload = initMap

}())
