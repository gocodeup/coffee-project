"use strict"

// creates divs for each coffee


function renderCoffee(coffee) {
	let html = '<div class="coffee col-6 overflow-auto card">';
	// html += '<td>' + coffee.id + '</td>';
	html += '<h3>' + coffee.name + '</h3>';
	html += '<p>' + coffee.roast + '</p>';
	html += '</div>';
	
	return html;
}

// listing coffees in order
function renderCoffees(coffees) {
	let html = '';
	for (let i = coffees.length - 1; i >= 0; i--) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}

function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	let selectedRoast = roastSelection.value;
	let filteredCoffees = [];
	coffees.forEach(function (coffee) {
		
		if (coffee.roast === selectedRoast || selectedRoast === 'All') {
			filteredCoffees.push(coffee);
		}
		
		// if (coffee.roast === selectedRoast && (coffee.name === searchCoffee.value)) {
		// 	filteredCoffees.push(coffee);
		// } else if (selectedRoast === 'All') {
		// 	filteredCoffees.push(coffee);
		// }
	});
	tbody.innerHTML = renderCoffees(filteredCoffees);
}

function shownCoffee(e) {
	e.preventDefault();
	let userInput = searchCoffee.value;
	let lowerCaseInput = userInput.toLowerCase()
	let filteredCoffees = [];
	let selectedRoast = roastSelection.value;
	coffees.forEach(function (coffee) {
		let namedCoffee = (coffee.name).toLowerCase();
		if (namedCoffee.indexOf(lowerCaseInput) > -1) {
			filteredCoffees.push(coffee);
		}
	});
	tbody.innerHTML = renderCoffees(filteredCoffees);
}


function newCoffee(name, roast) {
	// this.name = addCoffee.value;
	// this.roast = roastType.value;
	return {
		name: name,
		roast: roast,
	}
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees.reverse());

// submitButton.addEventListener('click', updateCoffees);


let searchCoffee = document.getElementById('search');
searchCoffee.addEventListener('keyup', shownCoffee);

roastSelection.addEventListener('change', updateCoffees);

let addCoffee = document.getElementById('addCoffee');
let roastType = document.getElementById('roastType');
let addSubmit = document.getElementById('newCoffee');

addSubmit.addEventListener('click', newCoffee);