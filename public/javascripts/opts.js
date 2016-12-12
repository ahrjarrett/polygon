var opts = {
  mapOpts: {
    center: { lat: 39.7392, lng: -104.9903 },
    zoom: 10
  },
  polyOpts: {
    path: new google.maps.MVCArray(),
    strokeColor: '#1cb841',
    fillColor: '#1cb841',
    opacity: .25,
    draggable: true,
    editable: true
  }
}

module.exports = opts
