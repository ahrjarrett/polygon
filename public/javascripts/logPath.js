// break while loop and forEach into own module
module.exports = function(map, path, el){
  this.currentPath = path
  var logPath = document.getElementById(el)

  logPath.addEventListener('click', function(e){
    e.preventDefault()
    var parentNode = document.getElementById('path-log')
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild)
    }

    currentPath.forEach(function(path, idx) {
      if (idx === currentPath.length - 1) {
        var logTemplate = `{ lat: ${path.lat()}, lng: ${path.lng() } }`
      } else {
        var logTemplate = `{ lat: ${path.lat()}, lng: ${path.lng()} },`
      }
      var node = document.createElement('li')
      var textnode = document.createTextNode(logTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
    })

  })
}
