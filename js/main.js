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
const container = document.querySelector('.container')
const arrowText = document.querySelector('.arrowText')
const orde = document.querySelector('#orde')
const save = document.querySelector('#save')
let counter = 0
let checker = 0
const fileManager = document.querySelector('.fileManager')

bodegas.addEventListener('click', function () {
	container.style.transform = 'translateY(14rem)'
	arrowText.textContent = 'Ingresar en Operaciones'

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
				if (checker === 1) {
					container.style.transform = 'translate(75rem, 11rem)'
					arrowText.textContent = 'Se mostrara la orden de egreso '
					setTimeout(() => {
						container.style.transform = 'translate(45rem, 15rem)'

						arrowText.textContent =
							'En dichos campos se mostrara la informacion del producto que ha sido pasado por el escaner'
						setTimeout(() => {
							container.style.transform = 'translate(18rem, 4rem)'

							arrowText.textContent = 'Click en el icono de emitir'
						}, 5000)
					}, 5000)
				}
			})
		}

		if (keyNode === 'fer') {
			modal.forEach((e, f) => {
				modal[f].style.display = 'none'
				modal[1].style.display = 'block'
				container.style.transform = 'translate(105%, 5.4rem)'
				arrowText.textContent = 'Ingresar el número de la orden de egreso '
				orde.addEventListener('input', function () {
					container.style.transform = 'translate(255%, 4.5rem)'
					arrowText.textContent = 'Grabar la informacion ingresada '
					save.addEventListener('click', function () {
						container.style.transform = 'translate(20%, 22rem)'
						arrowText.textContent =
							'Abrir la opcion de Recepcion de transferencia FPD '
						checker = 1
					})
				})
			})
		}
	},
	expand: function (event, data) {
		var keyNode = data.node.key
		if (keyNode === 'oper') {
			container.style.transform = 'translateY(16.5rem)'
			arrowText.textContent = 'Ingresar en Transferencias'
		} else if (keyNode === 'trans') {
			container.style.transform = 'translateY(18rem)'
			arrowText.textContent = 'Ingresar en Transf-Recepcion'
		} else if (keyNode === 'transf') {
			container.style.transform = 'translate(20%, 23.2rem)'
			arrowText.textContent =
				'Abrir la opcion Fe Recepción de Transferencias FPD '
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
	container.style.transform = 'translate(70rem, 37rem)'
	arrowText.textContent =
		'Selecciona si para grabar la informacion de los productos escaneados '
	si.addEventListener('click', function () {
		alert.style.display = 'none'
		emitir.setAttribute('disabled', '')
		container.style.opacity = '0'
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
