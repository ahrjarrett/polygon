var R = require('ramda')
var homes = require('../../db/data.json')

module.exports = function(map, poly, el){
  var polygon = poly
  var markers = []
  var results = []
  var minPrice = document.getElementById('min-price').value
  var maxPrice = document.getElementById('max-price').value

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
  var addMarker = function(location){
    var marker = new google.maps.Marker({
      position: location,
      map: map
    })
  }

  var getHomes = R.map(function(home){
    var datum = new google.maps.LatLng(home)
    if(home.price >= minPrice && home.price <= maxPrice){
      if(google.maps.geometry.poly.containsLocation(datum, polygon)) {
          results.push(home)
      }
    }
  })


  var logHomes = document.getElementById(el)
  logHomes.addEventListener('click', function(e){

    e.preventDefault()
    var parentNode = document.getElementById('coordinates-log')

    getHomes(homes)

    //break while loop and forEach into own module
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
    deleteMarkers()
    results.forEach(function(home, idx){
      var checkMapTemplate = `${home.lat} ${home.lng}`
      var node = document.createElement('LI')
      var textnode = document.createTextNode(checkMapTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
      markers.push(new google.maps.Marker({ position: home }))
    })


  })
}
