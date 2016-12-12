module.exports = function () {
  return $.ajax({
    type: 'GET',
    url: 'homes',
    dataType: 'json',
    async: false
  }).responseJSON
}

