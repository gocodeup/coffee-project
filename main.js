"use strict"
function renderCoffee(coffee) {
	var roast = coffee.roast.toLowerCase()
	console.log('')
	console.log(roast)
	var html = '<tr class="coffee">';

	if (roast === 'light') {
		console.log('expected: light')
		console.log('actual: ' + roast)

		html += '<td style="color: peru">' + coffee.name + '</td>';
		html += '<td style="color: peru">' + coffee.roast + '</td>';
		html += '</tr>';

		return html;
	}
	else if (roast === 'medium') {
		console.log('expected: medium')
		console.log('actual: ' + roast)

		html += '<td style="color: saddlebrown">' + coffee.name + '</td>';
		html += '<td style="color: saddlebrown">' + coffee.roast + '</td>';
		html += '</tr>';

		return html;
	}
	else if (roast === 'dark') {
		console.log('expected: dark')
		console.log('actual: ' + roast)

		html += '<td style="color: #271813">' + coffee.name + '</td>';
		html += '<td style="color: #271813">' + coffee.roast + '</td>';
		html += '</tr>';

		return html;
	}
	else {
		console.log('expected: default')
		console.log('actual: ' + roast)

		html += '<td style="color: grey">' + coffee.name + '</td>';
		html += '<td style="color: grey">' + coffee.roast + '</td>';
		html += '</tr>';

		return html;
	}
}

function renderCoffees(coffees) {
	var html = '';
	for(var i = coffees.length - 1; i >= 0; i--) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}

function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	console.log("Selected Roast: " + selectedRoast)
	var searchCoffee = document.forms.searchForm.search.value
	searchCoffee = searchCoffee.toString().toLowerCase()
	console.log("Search: " + searchCoffee)

	var filteredCoffees = [];
	coffees.forEach(function(coffee) {
		var checkCoffee = coffee.name.toString().toLowerCase()
		if ((checkCoffee.includes(searchCoffee)) && ((coffee.roast === selectedRoast) || ('all' === selectedRoast))) {
			filteredCoffees.push(coffee);
		}
	});
	tbody.innerHTML = renderCoffees(filteredCoffees);
}

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

function addCoffee(e) {
	e.preventDefault();
	var id = coffees.length + 1
	var name = document.getElementById('new-name').value
	var roast = document.getElementById('new-roast').value
	coffees.unshift({id, name, roast})
	console.log({id, name, roast})
	console.log(coffees)
	tbody.innerHTML = renderCoffees(coffees.sort());
}

// function knln(coffee) {
// 	var roast = coffee.roast.toLowerCase()
// 	console.log('')
// 	console.log(roast)
// 	var html = '<tr class="coffee">';
//
// 	if (roast === 'light') {
// 		console.log('expected: light')
// 		console.log('actual: ' + roast)
//
// 		html += '<td style="color: black">' + coffee.name + '</td>';
// 		html += '<td style="color: peru">' + coffee.roast + '</td>';
// 		html += '</tr>';
//
// 		return html;
// 	}
// 	else if (roast === 'medium') {
// 		console.log('expected: medium')
// 		console.log('actual: ' + roast)
//
// 		html += '<td style="color: black">' + coffee.name + '</td>';
// 		html += '<td style="color: saddlebrown">' + coffee.roast + '</td>';
// 		html += '</tr>';
//
// 		return html;
// 	}
// 	else if (roast === 'dark') {
// 		console.log('expected: dark')
// 		console.log('actual: ' + roast)
//
// 		html += '<td style="color: black">' + coffee.name + '</td>';
// 		html += '<td style="color: #271813">' + coffee.roast + '</td>';
// 		html += '</tr>';
//
// 		return html;
// 	}
// 	else {
// 		console.log('expected: default')
// 		console.log('actual: ' + roast)
//
// 		html += '<td style="color: grey">' + coffee.name + '</td>';
// 		html += '<td style="color: grey">' + coffee.roast + '</td>';
// 		html += '</tr>';
//
// 		return html;
// 	}
// }



var tbody = document.querySelector('#coffees');
var submitButton1 = document.querySelector('#submit1');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var liveRefresh1 = document.querySelector('#roast-selection')
var liveRefresh2 = document.querySelector('#search')

tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton1.addEventListener('click', updateCoffees);

submitButton2.addEventListener('click', addCoffee);

liveRefresh1.addEventListener('change', updateCoffees)

liveRefresh2.addEventListener('input', updateCoffees)