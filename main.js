// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
	{ id: 1, name: "Light City", roast: "light" },
	{ id: 2, name: "Half City", roast: "light" },
	{ id: 3, name: "Cinnamon", roast: "light" },
	{ id: 4, name: "City", roast: "medium" },
	{ id: 5, name: "American", roast: "medium" },
	{ id: 6, name: "Breakfast", roast: "medium" },
	{ id: 7, name: "High", roast: "dark" },
	{ id: 8, name: "Continental", roast: "dark" },
	{ id: 9, name: "New Orleans", roast: "dark" },
	{ id: 10, name: "European", roast: "dark" },
	{ id: 11, name: "Espresso", roast: "dark" },
	{ id: 12, name: "Viennese", roast: "dark" },
	{ id: 13, name: "Italian", roast: "dark" },
	{ id: 14, name: "French", roast: "dark" },
];

const createCoffeeElement = (coffee) => {
	let tr = document.createElement("tr");
	tr.classList.add("coffee");

	tr.innerHTML = `
        <td>${coffee.id}</td>
        <td>${coffee.name}</td>
        <td>${coffee.roast}</td>
    `;
	return tr;
};

const renderCoffees = (coffees, target) => {
	// Clear tbody before inserting new rows
	target.innerHTML = "";
	for (let i = coffees.length - 1; i >= 0; i--) {
		const coffeeElement = createCoffeeElement(coffees[i]);
		target.appendChild(coffeeElement);
	}
};

const updateCoffees = (e, target, selection) => {
	e.preventDefault();
	const selectedRoast = selection.value;
	const filteredCoffees = coffees.filter((coffee) => coffee.roast === selectedRoast);
	renderCoffees(filteredCoffees, target);
};

// IIFE
(() => {
	const tbody = document.querySelector("#coffees");
	const submitButton = document.querySelector("#submit");
	const roastSelection = document.querySelector("#roast-selection");
	renderCoffees(coffees, tbody, roastSelection);

	submitButton.addEventListener("click", (e) => {
		updateCoffees(e, tbody, roastSelection);
	});
})();
