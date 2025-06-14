"use strict";

document.addEventListener("click", (e) => {
	const targetElement = e.target;
	const body = document.body;

	if (targetElement.closest(".menu-burger")) {
		if (body.classList.contains("menu-open")) {
			body.classList.remove("menu-open");
			body.classList.add("menu-close");
		} else if (body.classList.contains("menu-close")) {
			body.classList.remove("menu-close");
			body.classList.add("menu-open");
		} else {
			body.classList.add("menu-open");
		}
	}
});
