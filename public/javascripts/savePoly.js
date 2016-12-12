module.exports = function(map, paths, el){
  var thisPath = paths
  var el = document.getElementById(el)
  el.addEventListener('click', function(e){
    // FOR SOME REASON: e.preventDefault prevents form from hitting DB
    //e.preventDefault()
    var newPoly = new google.maps.Polygon({
      paths: thisPath,
      strokeColor: '#000',
      fillColor: '#000',
      opacity: .25
    })
    console.log(newPoly)

    newPoly.setMap(map)

  })
}
