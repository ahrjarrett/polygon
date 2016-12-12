module.exports = function(map, path, el){
  var el = document.getElementById(el)
  el.addEventListener('click', function(e){
    var newPoly = new google.maps.Polygon({
      path: currentPath,
      strokeColor: '#dddddd',
      fillColor: '#dddddd',
      opacidty: .25
    })

    console.log(newPoly)
    newPoly.setMap(map)

  })
}
