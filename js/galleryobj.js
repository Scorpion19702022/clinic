const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const burgerBtn = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const cross = document.querySelector('.fa-xmark')

// ====================================================

const body = document.querySelector('body')
const viewText = document.querySelectorAll('.slidertext')

// ====================================================

const spanInFooter = document.querySelector('.year')
const currentYear = new Date().getFullYear()

// ====================================================

console.log(viewText)

body.onload = function () {
	loadText()
}

const loadText = () => {
	setTimeout(() => {
		viewText.forEach(el => {
			el.classList.add('actionslider')
		})
	}, 500)
}

// ====================================================

const handleBtn = () => {
	nav.classList.toggle('actionnav')
	bars.classList.toggle('hide')
	cross.classList.toggle('hide')
	document.body.classList.toggle('stickybody')
	links.forEach(el => {
		el.addEventListener('click', () => {
			nav.classList.remove('actionnav')
			bars.classList.remove('hide')
			cross.classList.add('hide')
		})
	})
}

// ====================================================

const swiper = new Swiper('.sliders', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// ====================================================

const yearFooter = () => {
	spanInFooter.innerHTML = currentYear
}

yearFooter()

// ====================================================

burgerBtn.addEventListener('click', handleBtn)
