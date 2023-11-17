"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += `<div>${coffee.id}</div>`;
    html += `<h5>${coffee.name}</h5>`;
    html += `<p>${coffee.roast}</p>`;
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

function updateCoffees(e) {
    e.preventDefault();
    const selectedRoast = roastSelection.value;
    const searchTerm = coffeeSearch.value.toLowerCase();
    const filteredCoffees = coffees.filter(coffee =>
        coffee.roast === selectedRoast || coffee.name.includes(searchTerm)
    );
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

const tbody = document.querySelector('#coffees');
const coffeeForm = document.querySelector('#coffee-form');
const roastSelection = document.querySelector('#roast-selection');
const coffeeSearch = document.querySelector('#coffee-search');

tbody.innerHTML = renderCoffees(coffees);

coffeeForm.addEventListener('submit', updateCoffees);
coffeeSearch.addEventListener('input', updateCoffees);

