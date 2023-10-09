console.clear();

window.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector("#button-js")
	const modal = document.querySelector("#modal-js")
	const close = modal.querySelector("#modal-close-js")

	const navburger = document.querySelector("#navbar-burger-js")
	const navbar = document.querySelector("#navbar-mobile-js")

	const body = document.body

	btn.addEventListener("click", () => {
		modal.classList.add("show")
	})

	modal.addEventListener("click", (event) => {
		if (
			(event.target.classList.contains("show")) ||
			(event.target.classList.contains("modal__wrap"))
		) {
			modal.classList.remove("show")
		}
	})

	close.addEventListener("click", () => modal.classList.remove("show"))

	navburger.addEventListener("click", () => {
		navburger.classList.toggle("active")
		navbar.classList.toggle("hidden")

		body.classList.add("no-scroll")
	})

	window.addEventListener("resize", () => {
		navburger.classList.remove("active")
		navbar.classList.add("hidden")
		body.classList.remove("no-scroll")
	})
})
