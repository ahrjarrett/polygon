var R = require('ramda')
var homes = require('../../db/data.json')

module.exports = function(map, poly, el){
  var polygon = poly
  var markers = []
  var results = []
  var minPrice = document.getElementById('min-price').value
  var maxPrice = document.getElementById('max-price').value

  var getHomes = R.map(function(home){
    var datum = new google.maps.LatLng(home.geometry.location)
    if(home.geometry.price >= minPrice && home.geometry.price <= maxPrice){
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
      parentNode.removeChild(parentNode.firstChild)
    }

    results.forEach(function(home, idx){
      var logTemplate = `${home.formatted_address}`
      var node = document.createElement('LI')
      var textnode = document.createTextNode(logTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
    })
  })
}

