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

  var setMapOnAll = function(map){
    for(var i = 0; i < markers.length; i++){
      markers[i].setMap(map)
    }
  }
  var clearMarkers = function(){
    setMapOnAll(null)
  }
  var deleteMarkers = function(){
    clearMarkers()
    markers = []
  }

  var logHomes = document.getElementById(el)
  logHomes.addEventListener('click', function(e){
    e.preventDefault()
    deleteMarkers()
    getHomes(homes)

    var parentNode = document.getElementById('address-log')
    while (parentNode.firstChild) {
      results = []
      parentNode.removeChild(parentNode.firstChild)
    }
    results.forEach(function(home, idx){
      var logTemplate = `${home.formatted_address}`
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

