navOpenClose = function( event ) {
	if (event.target.id == "nav-links") {
		tgt = event.target
		tgtHeight = tgt.style.minHeight
		
		if (tgtHeight) {
			tgtHeight = ""
		} else {
			tgtHeight = "10em"
		}
	} else if (document.getElementById("nav-links").style.minHeight) {
		document.getElementById("nav-links").style.minHeight = ""
	}
}

navOpen = function( event ) {
	document.getElementById("nav-links").style.minHeight = "10em"
}

navClose = function( event ) {
	document.getElementById("nav-links").style.minHeight = ""
}

document.getElementById("nav-menu").addEventListener("mouseenter", navOpen , false);
document.getElementsByTagName("nav")[0].addEventListener("mouseleave", navClose , false);
document.addEventListener("click", navOpenClose,false)