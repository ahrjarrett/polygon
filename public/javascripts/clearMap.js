var polygons = require('./ajaxRequest')('polygons')

module.exports = function(map, el) {
  var map = map

  var elem = document.getElementById(el)
  elem.addEventListener('click', function(e) {
    e.preventDefault()

    polygons.forEach(function(polygon) {
      polygon.setMap(null)
    })
  })

}
