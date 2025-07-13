"use srtict";

// Задача 1

const body = document.body;

// Задача 2

const container = document.querySelector(".main__container");

const addListToBody = (count = 5) => {
	if (!container) return;

	const ul = document.createElement("ul");

	for (let i = 1; i <= count; i++) {
		const li = document.createElement("li");
		li.textContent = `Елемент: ${i}`;
		ul.insertAdjacentElement("beforeend", li);
	}

	ul.classList.add("main__list");
	ul.style.marginBottom = "1rem";

	container.insertAdjacentElement("afterbegin", ul);
};

addListToBody(10);

// Задача 3

document.body.classList.add("loaded");

if (document.body.classList.contains("loaded")) {
	container.style.color = "green";
}

// Задача 4

const items = document.querySelectorAll(".main__item");

items.forEach((item, index) => {
	item.classList.add("active");
	item.textContent = `Елемент №${index + 1}`;
});

// Задача 5

const button = document.querySelector(".main__button");

const scrollToElement = (el) => {
	if (!el) return;

	button.scrollIntoView({
		button: `end`,
		inline: `nearest`,
		behavior: `smooth`,
	});
};
scrollToElement(button);

// Задача 6

const linkElement = document.querySelector(".main__link");
linkElement.dataset.value = "100";

const changeLinkColor = (link) => {
	if (!link) return;
	const value = Number(link.dataset.value);
	if (value < 200) link.style.color = "red";
};
changeLinkColor(linkElement);
