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


// shows coffees by roast type from the coffees array or from the local storage if it exists
function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	let selectedRoast = roastSelection.value;
	let filteredCoffees = [];
	let x = JSON.parse(localStorage.getItem('newCoffeesList'));
	if(localStorage.getItem("newCoffeesList") === null) {
		coffees.forEach(function (coffee) {
			if (coffee.roast === selectedRoast || selectedRoast === 'All') {
				filteredCoffees.push(coffee);
			}
		});
	} else {
		x.forEach(function (coffee) {
			if (coffee.roast === selectedRoast || selectedRoast === 'All') {
				filteredCoffees.push(coffee);
			}
		});
	}
	tbody.innerHTML = renderCoffees(filteredCoffees);
}



//shows coffees by name from the coffees array or from the local storage if it exists
function shownCoffee(e) {
	e.preventDefault();
	let userInput = searchCoffee.value;
	let lowerCaseInput = userInput.toLowerCase();
	let filteredCoffees = [];
	let x = JSON.parse(localStorage.getItem('newCoffeesList'));
	if(localStorage.getItem("newCoffeesList") === null) {
		coffees.forEach(function (coffee) {
			let namedCoffee = (coffee.name).toLowerCase();
			if (namedCoffee.indexOf(lowerCaseInput) > -1) {
				filteredCoffees.push(coffee);
			}
		});
	} else {
		x.forEach(function (coffee) {
			let namedCoffee = (coffee.name).toLowerCase();
			if (namedCoffee.indexOf(lowerCaseInput) > -1) {
				filteredCoffees.push(coffee);
			}
		});
	}
	tbody.innerHTML = renderCoffees(filteredCoffees);
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

//on keyup 'refreshes' coffee list
let searchCoffee = document.getElementById('search');
searchCoffee.addEventListener('keyup', shownCoffee);
//refreshes list when there is change in the roast selection
roastSelection.addEventListener('change', updateCoffees);

let addCoffee = document.getElementById('addCoffee');
let roastType = document.getElementById('roastType');
let addSubmit = document.getElementById('newCoffee');
addSubmit.addEventListener('click', addNewCoffee);


//on the load of the window the coffee list is loaded from the local storage
window.addEventListener('load', newList);
function newList() {
	let x = JSON.parse(localStorage.getItem('newCoffeesList'));
	tbody.innerHTML = renderCoffees(x);
}



//adds users new coffee to the coffees array and stores the new array in local storage
function addNewCoffee(e) {
	e.preventDefault();
	let newId = coffees.length +1;
	let newName = addCoffee.value;
	let newRoast = roastType.value;
	let newCoffee = {id: newId, name: newName, roast: newRoast};
	let filteredCoffees = [];
	coffees.unshift(newCoffee);
	tbody.innerHTML = renderCoffees(coffees);
	console.log(coffees);
	localStorage.setItem('newCoffeesList', JSON.stringify(coffees));
	JSON.parse(localStorage.getItem('newCoffeesList'));
}

