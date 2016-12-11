// break while loop and forEach into own module
module.exports = function(path, el){
  this.currentPath = path
  var logPath = document.getElementById(el)
  logPath.addEventListener('click', function(e){

    e.preventDefault()
    var parentNode = document.getElementById('path-log')
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }

    currentPath.forEach(function(coordinate, idx){
      var logTemplate = `{lat: ${coordinate.lat()}, lng: ${coordinate.lng()}},`
      var node = document.createElement('LI')
      var textnode = document.createTextNode(logTemplate)
      node.appendChild(textnode)
      parentNode.appendChild(node)
    })
  })
}
