module.exports = function(el){
  'use strict'

  var undoPin = document.getElementById(el)
  undoPin.addEventListener('click', function(e){
    e.preventDefault()
    currentPath.pop()
  })
}
