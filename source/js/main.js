const WindowEventFunc = () => {
	window.addEventListener("resize", () => {
		navbarBurger.classList.remove("active")
		document.body.classList.remove("no-scroll")
		navbarMobile.classList.add("hidden")
	})
}

const Navigation = () => {
	const navbarMobile = document.querySelector("#navbar-mobile-js")
	const navbarBurger = document.querySelector("#navbar-burger-js")

	navbarBurger.addEventListener("click", () => {
		navbarBurger.classList.toggle("active")
		navbarMobile.classList.toggle("hidden")
		document.body.classList.toggle("no-scroll")
	})

	WindowEventFunc()
}

const ModalFunc = () => {
	const modal = document.querySelector("#modal-js")
	const button = document.querySelector("#button-js")
	const closeMdal = modal.querySelector("#modal-close-js")

	button.addEventListener("click", ()=>{
		modal.classList.toggle("show")
	})

	closeMdal.addEventListener("click", ()=>{
		modal.classList.remove("show")
	})

	WindowEventFunc()
}

Navigation()
ModalFunc()
WindowEventFunc()