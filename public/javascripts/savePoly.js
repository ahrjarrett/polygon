module.exports = function(map, paths, el){
  'use strict'
  var thisPath = paths
  var el = document.getElementById(el)
  el.addEventListener('click', function(e){
    // for some reason preventDefault() prevents form from hitting DB
    //e.preventDefault()
    var newPoly = new google.maps.Polygon({
      paths: thisPath,
      strokeColor: '#000',
      fillColor: '#000',
      opacity: .25
    })

    newPoly.setMap(map)
  })
}
