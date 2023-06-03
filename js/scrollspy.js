const menuItems = document.querySelectorAll('.navbar__link')
const scrollSpySections = document.querySelectorAll('.section')

console.log(scrollSpySections)
console.log(menuItems)

const handleScrollSpy = () => {
	if (document.body.classList.contains('mainpage')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('scrollactive'))

				activeSection.classList.add('scrollactive')
			}

			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
				const lastSection = document.querySelector('a:last-of-type')

				menuItems.forEach(item => item.classList.remove('scrollactive'))

				lastSection.classList.add('scrollactive')
			}
		})
	}
}

window.addEventListener('scroll', handleScrollSpy)
