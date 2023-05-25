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
		delay: 2500,
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

// =======================================

crossSlider.forEach(el => {
	el.addEventListener('click', function () {
		teamInfo.classList.remove('teamsscale')
		slider.classList.add('swiperscale')
	})
})

const viewSlider = () => {
	teamInfo.classList.add('teamsscale')
	slider.classList.remove('swiperscale')
}

// =======================================

burgerBtn.addEventListener('click', handleBtn)
sliderbtn.addEventListener('click', viewSlider)
