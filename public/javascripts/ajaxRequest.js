module.exports = function (urlCall) {
  return $.ajax({
    type: 'GET',
    url: urlCall,
    dataType: 'json',
    async: false
  }).responseJSON
}

