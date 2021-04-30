var nC = document.querySelector(".nav-container")
var nL = document.querySelector(".nav-links")

navOpenClose = function( event ) {
	console.log(event.target)
	if (nC.style.maxHeight == "100vh") {
		nC.style.maxHeight = ""
		nL.style.maxHeight = ""
	} else if (event.target.className == "nav-menu") {
		if (nC.style.maxHeight == "100vh") {
			nC.style.maxHeight = ""
			nL.style.maxHeight = ""
		} else {
			nC.style.maxHeight = "100vh"
			nL.style.maxHeight = "100%"
		}	}
}

navOpen = function( event ) {
	nC.style.maxHeight = "100vh"
	nL.style.maxHeight = "100%"
}

navClose = function( event ) {
	nC.style.maxHeight = "100vh"
	nL.style.maxHeight = "100%"
}

document.querySelector("nav").addEventListener("click", navOpenClose , false);