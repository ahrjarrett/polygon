var homes = require('./ajaxRequest')('homes')
var appendToList = require('./appendToList')

// pass null for poly if no poly is needed
module.exports = function(template, map, poly, listener, target) {
  'use strict'

  if (poly !== null) {
    var paths = poly.getPath()
  }

  var logData = document.getElementById(listener)
  logData.addEventListener('click', function(e) {

    // is this conditional?
    e.preventDefault()

    var parentNode = document.getElementById(target)
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild)
    }

    var logTemplate = template

  })

}
