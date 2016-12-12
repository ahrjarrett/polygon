var R = require('ramda')
var mongoose = require('mongoose')
var getRemote = require('./ajaxRequest')
var homes = getRemote()

module.exports = function(map, polygon, markers, results, el){
  var showHomes = document.getElementById(el)
  showHomes.addEventListener('click', function(e){

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
      var datum = new google.maps.LatLng(home.geometry.location)
      if(home.geometry.price >= minPrice && home.geometry.price <= maxPrice){
        if(google.maps.geometry.poly.containsLocation(datum, polygon)) {
            results.push(home)
            markers.push(new google.maps.Marker({ position: home.geometry.location }))
        }
      }
    })

    deleteMarkers()
    getHomes(homes)
    setMapOnAll(map)

  })

}
