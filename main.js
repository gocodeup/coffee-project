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
    const filteredRoast = [];
    if (e.target === roastSelection) {
        coffees.forEach(coffee => {
            if (selectedRoast === "all") {
                filteredRoast.push(coffee)
            } else if (coffee.roast === selectedRoast) {
                filteredRoast.push(coffee);
            }
        });
        coffeeDiv.innerHTML = renderCoffees(filteredRoast);
    }
}

function updateName(e) {

    const filteredNames = [];
    const nameSelectorNew = nameSelector.value.toLowerCase()
    e.preventDefault();
    console.log(nameSelectorNew)
    if (nameSelectorNew === "") {
        filteredNames.forEach(coffee => {

            filteredNames.push(coffee)
        })}
     else {
        coffees.forEach(coffee => {
                if (coffee.name.toLowerCase().includes(nameSelectorNew))/*&& coffee.roast === roastSelection.value) */ {
                    filteredNames.push(coffee);
                }
            }
        )
    }

    coffeeDiv.innerHTML = renderCoffees(filteredNames);
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

const coffeeDiv = document.querySelector('#coffees');
const roastSelection = document.querySelector('#roast-selection');
const nameSelector = document.querySelector('#name-selector');

coffeeDiv.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener("change", updateRoast);
document.querySelector("#name-selector").addEventListener("input", updateName);
