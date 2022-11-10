"use strict"

// Coffee Inventory
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

// Custom Coffee Functionality
let addCoffee = function (e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    coffees.push( {
        id: coffees.length + 1,
        name: customName.value,
        roast: customRoast.value
    });
    console.log(`${customName.value} has been added to the inventory.`);
    coffeeDiv.innerHTML = renderCoffees(coffees);
}

let customName = document.querySelector('#custom-name');
let customRoast = document.querySelector('#custom-roast');
let customSubmit = document.querySelector('#custom-submit');
customSubmit.addEventListener('click', addCoffee);

// Populates the Coffee Selection
function renderCoffee(coffee) {
    let html = '<div class="coffees">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

let coffeeDiv = document.querySelector('#coffees');
coffeeDiv.innerHTML = renderCoffees(coffees);

// Updates the Coffee by Roast
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

let roastSelection = document.querySelector('#roast-selection');
let submitButton = document.querySelector('#roast-submit');
submitButton.addEventListener('click', updateCoffees);

// Search Bar Functionality
let searchCoffee = function () {
    let filteredCoffees = [];
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(search.value.toLowerCase())) {
            filteredCoffees.push(coffees[i]);
        }
    }
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

let search = document.getElementById('search');
search.addEventListener('keyup', searchCoffee);