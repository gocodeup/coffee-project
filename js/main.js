"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee-wrapper">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchedName = nameSelection.value
    console.log(searchedName)
    let filteredCoffees = [];
    if (searchedName === ``) {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
            if (selectedRoast === `all`) {
                filteredCoffees.push(coffee)
            }
        });
    }
	if (searchedName !== ``) {
		coffees.forEach(function (coffee) {
			if (coffee.roast === selectedRoast) {
				filteredCoffees.push(coffee);
			}
			if (selectedRoast === `all`) {
				filteredCoffees.push(coffee)
			}
		});
		filteredCoffees.forEach(function (coffee) {
			if (coffee.name.toLowerCase().includes(searchedName.toLowerCase())){
				filteredCoffees.push(coffee);
			}
		});
	}
    tbody.innerHTML = renderCoffees(filteredCoffees);
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
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
let roastSelection = document.querySelector(`#roast-selection`);
let nameSelection = document.querySelector(`#name-selection`)


tbody.innerHTML = renderCoffees(coffees);

nameSelection.addEventListener('keyup', updateCoffees)
roastSelection.addEventListener('change', updateCoffees)
submitButton.addEventListener('click', updateCoffees);

