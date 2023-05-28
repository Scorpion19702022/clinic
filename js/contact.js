const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const burgerBtn = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const cross = document.querySelector('.fa-xmark')

// =============================================

const inputName = document.querySelector('#name')
const inputMail = document.querySelector('#email')
const textarea = document.querySelector('#msg')

const errorName = document.querySelector('.errorname')
const errorMail = document.querySelector('.errormail')
const errorText = document.querySelector('.errortext')

const sendStatus = document.querySelector('.status')

const btnSend = document.querySelector('.btnsend')
const btnClean = document.querySelector('.btnclean')

const re =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

// =============================================

const handleBtn = () => {
	nav.classList.toggle('actionnav')
	bars.classList.toggle('hide')
	cross.classList.toggle('hide')
	links.forEach(el => {
		el.addEventListener('click', () => {
			nav.classList.remove('actionnav')
			bars.classList.remove('hide')
			cross.classList.add('hide')
		})
	})
}

// =============================================

const clean = () => {
	inputName.value = ''
	inputMail.value = ''
	textarea.value = ''
}

// =============================================

burgerBtn.addEventListener('click', handleBtn)

btnClean.addEventListener('click', clean)
