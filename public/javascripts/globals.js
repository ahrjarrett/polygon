function clearLog() {
  var addressLog = document.getElementById('address-log')
  var coordinatesLog = document.getElementById('coordinates-log')
  var pathLog = document.getElementById('path-log')

  function whileChild(parent) {
    while(parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }
  whileChild(addressLog)
  whileChild(coordinatesLog)
  whileChild(pathLog)
}

function clearMap() {
  console.log('clearMap wired up')
}
