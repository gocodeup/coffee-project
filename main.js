"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += `<h2>${coffee.name}</h2>`;
    html += `<p>${coffee.roast}</p>`;
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateRoast(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    const filteredCoffees = [];
    if (e.target === roastSelection) {
        coffees.forEach(coffee => {
            if (selectedRoast === "all") {
                filteredCoffees.push(coffee)
            } else if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }

        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function updateName(e) {
    const input = nameSelector.value;
    e.preventDefault();
    if (input !== "") {
        console.log("hello");
    }
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
const roastSelection = document.querySelector('#roast-selection');
const nameSelector = document.querySelector('#name-selector');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener("change", updateRoast);
nameSelector.addEventListener("change", updateName);
