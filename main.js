"use strict";

// CONSTRUCTS COFFEE LIST
function renderCoffee(coffee) {
	var html = '<ul id="coffee">';
	html += '<li><h2>' + coffee.name + '</h2>'
		+ '<p>' + coffee.roast + '</p>' + '</li>';
	html += '</ul>';
	return html;
}

// SORTS LIST
function renderCoffees(coffees) {
	var html = '';
	// for(var i = coffees.length - 1; i >= 0; i--) {
	for (var i = 0; i < coffees.length; i++) { //switched to increment for ascending order
		html += renderCoffee(coffees[i]);
	}
	return html;
}

// ROAST SELECTOR LOGIC
function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		if (selectedRoast === 'all') {
			filteredCoffees = coffees;
		} else if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		}
	});
	coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// SEARCH BAR LOGIC
function searchCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var searchInput = userInput.value.toLowerCase();
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		var currentRoast = coffee.roast.toLowerCase();
		var currentName = coffee.name.toLowerCase();
		if (currentRoast.includes(searchInput) || currentName.includes(searchInput)) {
			filteredCoffees.push(coffee);
		}
	});
	coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// CUSTOM COFFEE LOGIC



// COFFEE LIST
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

// VARS FOR HTML
var coffeeList = document.querySelector('#coffees'); //changed variable name to match ul
var submitButton = document.querySelector('#roast-submit');
var roastSelection = document.querySelector('#roast-selection');
var userInput = document.querySelector('#search-bar');
var searchSubmit = document.querySelector("#search-btn");
var customSubmit = document.querySelector('#custom-submit');

// DISPLAY FULL COFFEE LIST ON LOAD
coffeeList.innerHTML = renderCoffees(coffees);

// EVENT LISTENERS
submitButton.addEventListener('click', updateCoffees);
searchSubmit.addEventListener('click', searchCoffees);
userInput.addEventListener("keyup", searchCoffees);
customSubmit.addEventListener('click', someFunction());
