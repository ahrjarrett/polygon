module.exports = function(map, path, el){
  var currentPath = path
  var el = document.getElementById(el)
  el.addEventListener('click', function(e){
    var newPoly = new google.maps.Polygon({
      path: currentPath,
      strokeColor: '#000',
      fillColor: '#000',
      opacity: .25
    })

    console.log(newPoly.latLngs.b[0])
    newPoly.setMap(map)

  })
}
