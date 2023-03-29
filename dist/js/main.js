const Navigation = () => {
	const navbarMobile = document.querySelector("#navbar-mobile-js")
	const navbarBurger = document.querySelector("#navbar-burger-js")

	navbarBurger.addEventListener("click", () => {
		navbarBurger.classList.toggle("active")
		navbarMobile.classList.toggle("hidden")
		document.body.classList.toggle("no-scroll")
	})

	window.addEventListener("resize",()=>{
		navbarBurger.classList.remove("active")
		document.body.classList.remove("no-scroll")
		navbarMobile.classList.add("hidden")
	})
}

Navigation()