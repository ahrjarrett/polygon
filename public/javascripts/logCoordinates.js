// is anything being done with markers in this file?
// if not, get rid of setMapOnAll, clearMarkers, etc.
// don't forget the call to deleteMarkers on line 51

var R = require('ramda')
var getRemote = require('./ajaxRequest')
var homes = getRemote('homes')

module.exports = function(map, poly, el){
  'use strict'
  var polygon = poly
  var markers = []
  var results = []
  var minPrice = document.getElementById('min-price').value
  var maxPrice = document.getElementById('max-price').value

  var getHomes = R.map(function(home){
    var datum = new google.maps.LatLng(home.latlng)
    if(home.price >= minPrice && home.price <= maxPrice){
      if(google.maps.geometry.poly.containsLocation(datum, polygon)) {
          results.push(home)
      }
    }
  })

  var setMapOnAll = function(mapToSet){
    for(var i = 0; i < markers.length; i++){
      markers[i].setMap(mapToSet)
    }
  }
  var clearMarkers = function(){
    setMapOnAll(null)
  }
  var deleteMarkers = function(){
    clearMarkers()
    markers = []
  }

  var logData = document.getElementById(el)
  logData.addEventListener('click', function(e){

    e.preventDefault()
    var parentNode = document.getElementById('coordinates-log')

    getHomes(homes)

    while (parentNode.firstChild) {
      results = []
      parentNode.removeChild(parentNode.firstChild);
    }
    // does deleteMarkers do anything? if not, remove fns above too
    deleteMarkers()
    results.forEach(function(home, idx){
      var logTemplate = `${home.latlng.lat}, ${home.latlng.lng}`
      var node = document.createElement('LI')
      var nodeInner = document.createElement('A')
      var textnode = document.createTextNode(logTemplate)
      node.appendChild(nodeInner)
      nodeInner.appendChild(textnode)
      nodeInner.setAttribute('href', `/homes/${home._id}`)
      parentNode.appendChild(node)
    })

  })
}
