module.exports = function(map, path, el){
  var currentPath = path
  var el = document.getElementById(el)
  el.addEventListener('click', function(e){
    e.preventDefault()
    var newPoly = new google.maps.Polygon({
      path: currentPath,
      strokeColor: '#000',
      fillColor: '#000',
      opacity: .25
    })
    console.log(newPoly)

    newPoly.setMap(map)

  })
}
