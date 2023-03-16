"use strict"

function renderCoffee(coffee) {
    let html = `<div class="card">
                     <header class="coffee-name" id=coffees>${coffee.name}</header>
                     <p class="coffee-roast" id="roast-selection">${coffee.roast}</p>
                </div>`
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateRoast(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            filteredCoffees = coffees
        }else
        if(coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let searchInput = coffeeSelection.value;
    let filteredCoffees = [];
    coffees.forEach(coffee => {
        if (coffee.name.toLowerCase().includes(searchInput)){
            filteredCoffees.push(coffee);
        }
    });
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
let roastSelection = document.querySelector('#roast-selection');
let coffeeSelection = document.querySelector('#search')

document.querySelector('#search')
tbody.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', updateRoast);
coffeeSelection.addEventListener('input', updateCoffees)
