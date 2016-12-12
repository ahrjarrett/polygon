// break while loop and forEach into own module
module.exports = function(map, path, el){
  this.currentPath = path
  var logPath = document.getElementById(el)



  //path: new google.maps.MVCArray(),
  //strokeColor: '#1cb841',
  //fillColor: '#1cb841',
  //draggable: true,
  //opacity: .25

  logPath.addEventListener('click', function(e){
    e.preventDefault()
    var parentNode = document.getElementById('path-log')
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild)
    }

    currentPath.forEach(function(coordinate, idx){
      var logTemplate = `{ ${coordinate.lat()}, ${coordinate.lng()}}`
      var node = document.createElement('LI')
      var textnode = document.createTextNode(logTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
    })
  })
}
