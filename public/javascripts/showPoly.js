var getRemote = require('./ajaxRequest')
var polygons = getRemote('polygons')

module.exports = function(el, target){

  var results = []
  var showPoly = document.getElementById(el)

  showPoly.addEventListener('click', function(e){
    e.preventDefault()

    // consider making a fn called trimTags that removes outer html tags
    var parentNode = document.getElementById(target)
    while (parentNode.firstChild) {
      results = []
      parentNode.removeChild(parentNode.firstChild)
    }

    // use map here
    polygons.forEach(function(polygon){
      var polyTemplate = `Polygon: ${polygon.name}`
      var node = document.createElement('LI')
      var nodeInner = document.createElement('A')
      var textnode = document.createTextNode(polyTemplate)
      console.log(polygon.paths)

      node.appendChild(nodeInner)
      nodeInner.appendChild(textnode)
      nodeInner.setAttribute('href', `/polygons/${polygon._id}`)
      parentNode.appendChild(node)

      // get rid of 4 loop
      for(var i = 0; i < parentNode.children.length; i++) {
        results.push(parentNode.lastChild.innerText)
        parentNode.appendChild(parentNode.lastChild)
      }

    })

  })
}
