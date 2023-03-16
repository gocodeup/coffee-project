"use strict"

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

let userCoffees = JSON.parse(localStorage.getItem(`userCoffee`)) || [];

// Remove any null elements from userCoffees array
userCoffees = userCoffees.filter(function(coffee) {
	return coffee !== null;
});

console.log(userCoffees)


let test = userCoffees.concat(coffees);

function removeDuplicateObjects(arr) {
	return arr.filter(
		(obj, index, self) =>
			index ===
			self.findIndex((t) => t.name === obj.name)
	);
}

test = removeDuplicateObjects(test);


console.log(test)

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
function Coffee(id, name, roast) {
	this.id = id;
	this.name = name;
    this.roast = roast;
}

function updateCoffees(e) {
    e.preventDefault();
    let selectedRoast = roastSelection.value;
    let searchedName = nameSelection.value;
    let filteredCoffees = [];
	if (typeof test === null) {
		if (searchedName === ``) {
			coffees.forEach(function (coffee) {
				if (coffee.roast === selectedRoast) {
					filteredCoffees.push(coffee);
				}
				if (selectedRoast === `all`) {
					filteredCoffees.push(coffee);
				}
			});
		}
		if (searchedName !== ``) {
			coffees.forEach(function (coffee) {
				if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchedName.toLowerCase())) {
					filteredCoffees.push(coffee);
				}
				if (selectedRoast === `all` && coffee.name.toLowerCase().includes(searchedName.toLowerCase())) {
					filteredCoffees.push(coffee);
				}
			});
		}
	} else {
		if (searchedName === ``) {
			test.forEach(function (coffee) {
				if (coffee.roast === selectedRoast) {
					filteredCoffees.push(coffee);
				}
				if (selectedRoast === `all`) {
					filteredCoffees.push(coffee);
				}
			});
		}
		if (searchedName !== ``) {
			test.forEach(function (coffee) {
				if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchedName.toLowerCase())) {
					filteredCoffees.push(coffee);
				}
				if (selectedRoast === `all` && coffee.name.toLowerCase().includes(searchedName.toLowerCase())) {
					filteredCoffees.push(coffee);
				}
			});
		}
	}
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



function addCoffee(e){
	e.preventDefault();
	let lastObject = new Coffee(coffees.length + userCoffees.length + 1, addName.value, addRoastSelection.value);
	userCoffees.push(lastObject);
	localStorage.setItem('userCoffee', JSON.stringify(userCoffees.concat(coffees)));
	let newnew = userCoffees.concat(coffees)
	newnew = removeDuplicateObjects(newnew)
	tbody.innerHTML = renderCoffees(newnew);
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector(`#roast-selection`);
let nameSelection = document.querySelector(`#name-selection`);
let addRoastSelection = document.querySelector('#add-roast-selection');
let addNewCoffee = document.querySelector('#add-new-coffee');
let addName = document.querySelector('#add-coffee-name');

tbody.innerHTML = renderCoffees(test);

nameSelection.addEventListener('keyup', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
addNewCoffee.addEventListener("click", addCoffee);

