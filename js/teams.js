const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

const burgerBtn = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const cross = document.querySelector('.fa-xmark')

const teamInfo = document.querySelector('.teams')
const sliderbtn = document.querySelector('.btnteams')
const slider = document.querySelector('.teamswiper')
const crossSlider = document.querySelectorAll('.crosscard')

console.log(teamInfo)

// =======================================

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

// =======================================

const swiper = new Swiper('.teamswiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 3200,
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
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
			slidesPerGroup: 2,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 20,
			slidesPerGroup: 2,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerGroup: 3,
		},
	},
})

// =======================================

crossSlider.forEach(el => {
	el.addEventListener('click', function () {
		teamInfo.classList.remove('swiperview')
		slider.classList.add('swiperview')
	})
})

const viewSlider = () => {
	teamInfo.classList.add('swiperview')
	slider.classList.remove('swiperview')
}

// =======================================

burgerBtn.addEventListener('click', handleBtn)
sliderbtn.addEventListener('click', viewSlider)
