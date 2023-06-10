const navHome = document.querySelector('.home')
const navAbout = document.querySelector('.about')
const navOffer = document.querySelector('.offer')
const navOpinions = document.querySelector('.opinions')

const scrollSpy = () => {
	// console.log(window.scrollY)
	if (window.scrollY >= 625 && window.scrollY < 1550) {
		navHome.classList.remove('scrollactive')
		navAbout.classList.add('scrollactive')
		navOffer.classList.remove('scrollactive')
		navOpinions.classList.remove('scrollactive')
	} else if (window.scrollY >= 1550 && window.scrollY < 2335) {
		navHome.classList.remove('scrollactive')
		navAbout.classList.remove('scrollactive')
		navOffer.classList.add('scrollactive')
		navOpinions.classList.remove('scrollactive')
	} else if (window.scrollY >= 2335) {
		navHome.classList.remove('scrollactive')
		navAbout.classList.remove('scrollactive')
		navOffer.classList.remove('scrollactive')
		navOpinions.classList.add('scrollactive')
	} else {
		navHome.classList.add('scrollactive')
		navAbout.classList.remove('scrollactive')
		navOffer.classList.remove('scrollactive')
		navOpinions.classList.remove('scrollactive')
	}
}

window.addEventListener('scroll', scrollSpy)
