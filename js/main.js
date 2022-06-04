function openCity(evt, cityName) {
  var i, x, tablinks
  x = document.getElementsByClassName('city')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tabLink')
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(cityName).style.display = 'flex'
  evt.currentTarget.className += ' active'
}

$(function () {
  // using default options
  $('#tree').fancytree()
})
