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

const toggle = document.querySelector('.toggle')
const modal = document.querySelectorAll('.modal')
let counter = 0
// modal.forEach((e, f) => {
//   modal[f].style.display = 'none'
//   modal[2].style.display = 'block'
// })
toggle.addEventListener('click', function (e) {
  counter = counter + 1
  modal.forEach((e, f) => {
    modal[f].style.display = 'none'
    console.log(e)
    console.log(counter)
  })

  modal[counter].style.display = 'block'

  if (counter === 2) {
    counter = -1
  }
})
$('#tree').fancytree({
  dblclick: function (event, data) {
    // A node was activated: display its title:
    var keyNode = data.node.key
    if (keyNode === 'op4') {
      modal.forEach((e, f) => {
        modal[f].style.display = 'none'
        modal[0].style.display = 'block'
      })
    }
  },
})
// $('#tree').fancytree({
//   dblclick: function (event, data) {
//     console.log('epic')
//     //				data.node.toggleSelect();
//   },
// })

// const op4 = document.querySelector('#op4')
// op4.addEventListener('fancytreeclick', function (e) {
//   console.log('asd')
//   modal.forEach((e, f) => {
//     modal[f].style.display = 'none'
//     modal[0].style.display = 'block'
//   })
// })
