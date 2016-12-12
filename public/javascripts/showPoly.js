var getRemote = require('./ajaxRequest')
//var Polygon = require('../../models/polygon')
var polygons = getRemote('polygons')

module.exports = function(el, target){

  var results = []
  var showPoly = document.getElementById(el)

  showPoly.addEventListener('click', function(e){
    e.preventDefault()
    function trimTags(html, regex, result){
      return
    }

    var parentNode = document.getElementById(target)
    while (parentNode.firstChild) {
      results = []
      parentNode.removeChild(parentNode.firstChild)
    }
    polygons.forEach(function(polygon, idx){
      var polyTemplate = `name: ${polygon.name}, paths: ${polygon.paths[0]}`
      var node = document.createElement('LI')
      var nodeInner = document.createElement('A')
      var textnode = document.createTextNode(polyTemplate)

      node.appendChild(nodeInner)
      nodeInner.appendChild(textnode)
      nodeInner.setAttribute('href', `/polygons/${polygon._id}`)
      parentNode.appendChild(node)

      for(var i = 0; i < parentNode.children.length; i++) {
        results.push(parentNode.lastChild.innerText)
        parentNode.removeChild(parentNode.lastChild)
      }

      console.log(results)
    })
  })
}


