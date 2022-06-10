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

const bodegas = document.querySelector('#bodegas')
const modal = document.querySelectorAll('.modal')
let counter = 0

const fileManager = document.querySelector('.fileManager')

bodegas.addEventListener('click', function () {
  console.log('asd')
  console.log(fileManager)
  fileManager.style.display = 'block'
})

$('#tree').fancytree({
  dblclick: function (event, data) {
    // A node was activated: display its title:
    var keyNode = data.node.key
    if (keyNode === 're') {
      modal.forEach((e, f) => {
        modal[f].style.display = 'none'
        modal[0].style.display = 'block'
      })
    }
    if (keyNode === 'fer') {
      modal.forEach((e, f) => {
        modal[f].style.display = 'none'
        modal[1].style.display = 'block'
      })
    }
  },
})

const emitir = document.querySelector('#emitir')
const alert = document.querySelector('.alert')
const x = document.querySelector('.alert_x')
const si = document.querySelector('#si')
const no = document.querySelector('#no')

emitir.addEventListener('click', function () {
  alert.style.display = 'block'
  si.addEventListener('click', function () {
    alert.style.display = 'none'
    emitir.setAttribute('disabled', '')
  })
  no.addEventListener('click', function () {
    alert.style.display = 'none'
  })
  x.addEventListener('click', function () {
    alert.style.display = 'none'
  })
})

$(function () {
  $('.alert').draggable()
})
$(function () {
  $('.modal').draggable({
    containment: 'parent',
  })
})

const closet = document.querySelectorAll('#closet')
closet.forEach((e) => {
  e.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.parentElement.style.display = 'none'
  })
})
