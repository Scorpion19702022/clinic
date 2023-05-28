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
const textStatus = document.querySelector('.statusinfo')

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

const send = () => {
	if (inputName.value !== '' && re.test(inputMail.value) && textarea.value !== '') {
		sendStatus.classList.add('sendsuccess')
		textStatus.textContent = 'Wiadomość wysłana poprawnie'
		errorName.classList.remove('actionerror')
		errorMail.classList.remove('actionerror')
		errorText.classList.remove('actionerror')
		setTimeout(() => {
			sendStatus.classList.remove('sendsuccess')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value === '' && re.test(inputMail.value) && textarea.value !== '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.remove('actionerror')
		errorText.classList.remove('actionerror')
		inputName.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorName.classList.remove('actionerror')
			inputName.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value !== '' && re.test(inputMail.value) && textarea.value === '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.remove('actionerror')
		errorMail.classList.remove('actionerror')
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		textarea.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorText.classList.remove('actionerror')
			textarea.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value === '' && re.test(inputMail.value) && textarea.value === '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.remove('actionerror')
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backgrounderror')
		textarea.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorName.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputName.classList.remove('backgrounderror')
			textarea.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value === '' && inputMail.value === '' && textarea.value === '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backgrounderror')
		inputMail.classList.add('backgrounderror')
		textarea.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorName.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputName.classList.remove('backgrounderror')
			inputMail.classList.remove('backgrounderror')
			textarea.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value !== '' && inputMail.value === '' && textarea.value === '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.remove('actionerror')
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputMail.classList.add('backgrounderror')
		textarea.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorMail.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputMail.classList.remove('backgrounderror')
			textarea.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value === '' && inputMail.value !== '' && textarea.value === '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.remove('actionerror')
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backgrounderror')
		textarea.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorName.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputName.classList.remove('backgrounderror')
			textarea.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value === '' && inputMail.value === '' && textarea.value !== '') {
		sendStatus.classList.add('senderror')
		textStatus.textContent = 'Bład wysłania wiadomości'
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.remove('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backgrounderror')
		inputMail.classList.add('backgrounderror')
		setTimeout(() => {
			sendStatus.classList.remove('senderror')
			errorName.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			inputName.classList.remove('backgrounderror')
			inputMail.classList.remove('backgrounderror')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	}
}

// =============================================

const clean = () => {
	inputName.value = ''
	inputMail.value = ''
	textarea.value = ''
}

// =============================================

burgerBtn.addEventListener('click', handleBtn)

btnSend.addEventListener('click', send)
btnClean.addEventListener('click', clean)
