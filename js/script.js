const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const burgerBtn = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const cross = document.querySelector('.fa-xmark')

// ====================================================

const body = document.querySelector('body')
const infoHome = document.querySelector('.info')

// ====================================================

const boxCount = document.querySelector('.infomobile')
const itemCount = document.querySelectorAll('.infocount__count')

// console.log(boxCount)
// console.log(itemCount)

// ====================================================

const headingOffer = document.querySelector('.boxheading__heading')

// ====================================================

const actionAbout = document.querySelector('.box__info')

// ====================================================

const accordionBox = document.querySelector('.accordionbox')
const accordion = document.querySelectorAll('.accordionhead')
const accordionInfo = document.querySelectorAll('.accordioninfo')
const accordionArrow = document.querySelectorAll('.accordionarrow')

console.log(accordionInfo)

// ====================================================

const scrollInAboutUs = () => {
	// console.log(window.scrollY)
	setTimeout(() => {
		if (window.scrollY >= 520) {
			actionAbout.classList.add('actionaboutus')
		} else {
			actionAbout.classList.remove('actionaboutus')
		}
	}, 800)
	setTimeout(() => {
		if (window.scrollY >= 1150) {
			headingOffer.classList.add('viewboxheading')
		} else {
			headingOffer.classList.remove('viewboxheading')
		}
	}, 300)
}

// ====================================================

body.onload = function () {
	loadInfo()
}

const loadInfo = () => {
	setTimeout(() => {
		infoHome.classList.add('actioninfo')
	}, 800)
}

// ====================================================

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

// ====================================================

const optionCount = {
	rootMargin: '-25%',
}

const noOptioCount = {
	rootMargin: '-10%',
}

let final
let value

const startCounter = entry => {
	// console.log(entry[0])
	// console.log(entry[0].isIntersecting)

	if (entry[0].isIntersecting) {
		itemCount.forEach(count => {
			// console.log(count)

			const updateCount = () => {
				final = count.getAttribute('data-number')
				value = parseInt(count.textContent)

				const speed = final / 10

				if (value < final) {
					count.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCount, 50)
				} else {
					count.textContent = final
				}
			}

			updateCount()
		})
	}
}

// ====================================================

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('actioninfo')) {
		this.nextElementSibling.classList.remove('actioninfo')
		this.nextElementSibling.classList.remove('arrowaction')
	} else {
		closeAccordionInfo()
		this.nextElementSibling.classList.toggle('actioninfo')
		this.nextElementSibling.classList.add('arrowaction')
	}
}

const closeAccordionInfo = () => {
	accordionInfo.forEach(el => {
		el.classList.remove('actioninfo')
	})
}

// const actionArrow = () => {
// 	if (accordionInfo.classList.contains('actioninfo')) {
// 		accordionArrow.forEach(el => {
// 			el.classList.add('arrowaction')
// 		})
// 	} else {
// 		accordionArrow.forEach(el => {
// 			el.classList.remove('arrowaction')
// 		})
// 	}
// }

// ====================================================

burgerBtn.addEventListener('click', handleBtn)
const observer = new IntersectionObserver(startCounter, optionCount)
observer.observe(boxCount)
window.addEventListener('scroll', scrollInAboutUs)
accordion.forEach(btn => {
	btn.addEventListener('click', openAccordionItems)
})
