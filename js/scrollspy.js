// const menuItems = document.querySelectorAll('.navbar__link')
// const scrollSpySections = document.querySelectorAll('.section')

// console.log(scrollSpySections)
// console.log(menuItems)

// const handleScrollSpy = () => {
// 	if (document.body.classList.contains('mainpage')) {
// 		const sections = []

// 		scrollSpySections.forEach(section => {
// 			// console.log(window.scrollY)
// 			// wartość scrolla
// 			console.log(section.offsetTop)
// 			// odległośc danej sekcji od górnej krawędzi przeglądarki
// 			// console.log(section.offsetHeight)
// 			// wysokość każdej z sekcji

// 			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
// 				sections.push(section)

// 				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

// 				menuItems.forEach(item => item.classList.remove('scrollactive'))

// 				activeSection.classList.add('scrollactive')
// 			}

// 			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
// 				const lastSection = document.querySelector('a:last-of-type')

// 				menuItems.forEach(item => item.classList.remove('scrollactive'))

// 				lastSection.classList.add('scrollactive')
// 			}
// 		})
// 	}
// }

// window.addEventListener('scroll', handleScrollSpy)

const navHome = document.querySelector('.home')
const navAbout = document.querySelector('.about')
const navOffer = document.querySelector('.offer')
const navOpinions = document.querySelector('.opinions')

const scrollSpy = () => {
	console.log(window.scrollY)
	if (window.scrollY >= 925 && window.scrollY < 1850) {
		navHome.classList.remove('scrollactive')
		navAbout.classList.add('scrollactive')
		navOffer.classList.remove('scrollactive')
		navOpinions.classList.remove('scrollactive')
	} else if (window.scrollY >= 1850 && window.scrollY < 2635) {
		navHome.classList.remove('scrollactive')
		navAbout.classList.remove('scrollactive')
		navOffer.classList.add('scrollactive')
		navOpinions.classList.remove('scrollactive')
	} else if (window.scrollY >= 2635) {
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
