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

// ====================================================

const headingOffer = document.querySelector('.boxheading__heading')

// ====================================================

const actionAbout = document.querySelector('.box__info')

// ====================================================

const accordion = document.querySelectorAll('.accordionhead')
const accordionInfo = document.querySelectorAll('.accordioninfo')

// ====================================================

const logoOffer = document.querySelector('.infooffer__img')

// ====================================================

const headingOpinios = document.querySelector('.heading__head')

// ====================================================

const scrollInAboutUs = () => {
	console.log(window.scrollY)
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
	setTimeout(() => {
		if (window.scrollY >= 1250) {
			logoOffer.classList.add('actioninfooffer')
		} else {
			logoOffer.classList.remove('actioninfooffer')
		}
	}, 300)
	setTimeout(() => {
		if (window.scrollY >= 1560) {
			headingOpinios.classList.add('viewboxheading')
		} else {
			headingOpinios.classList.remove('viewboxheading')
		}
	}, 800)
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
		this.classList.remove('actionbtn')
		this.nextElementSibling.classList.remove('actioninfo')
	} else {
		closeAccordionInfo()
		addStylesAccordion()
		this.classList.toggle('actionbtn')
		this.nextElementSibling.classList.toggle('actioninfo')
	}
}

const closeAccordionInfo = () => {
	accordionInfo.forEach(el => {
		el.classList.remove('actioninfo')
	})
}

const addStylesAccordion = () => {
	accordion.forEach(el => {
		el.classList.remove('actionbtn')
	})
}

// ====================================================

const swiper = new Swiper('.opinionswiper', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
})

// ====================================================

burgerBtn.addEventListener('click', handleBtn)
const observer = new IntersectionObserver(startCounter, optionCount)
observer.observe(boxCount)
window.addEventListener('scroll', scrollInAboutUs)
accordion.forEach(btn => {
	btn.addEventListener('click', openAccordionItems)
})
