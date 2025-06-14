"use strict";

document.addEventListener("click", (e) => {
	const targetElement = e.target;
	const body = document.body;

	if (targetElement.closest(".menu-burger")) {
		const isOpen = body.classList.contains("menu-open");

		body.classList.remove(isOpen ? "menu-open" : "menu-close");
		body.classList.add(isOpen ? "menu-close" : "menu-open");
	}
});
