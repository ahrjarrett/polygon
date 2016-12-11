module.exports = function(el){
  var undoPin = document.getElementById(el)
  undoPin.addEventListener('click', function(e){
    e.preventDefault()
    currentPath.pop()
  })
}
