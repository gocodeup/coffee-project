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

let coffeeDisplay = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

const formElement = document.querySelector(".coffee-form");
const coffeeListElement = document.getElementById("coffee-list");
let roastSearch = document.querySelector('#roast-search');


function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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

function updateCoffees(e) {// don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDisplay.innerHTML = renderCoffees(filteredCoffees);
}
// listener for change in select box
const selectElement = document.getElementById("roast-selection");
selectElement.addEventListener("change", updateCoffees);
updateCoffees();

// search bar
function searchCoffee() {
    let selectedRoast = roastSearch.value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeDisplay.innerHTML = renderCoffees(filteredCoffees);
}
roastSearch.addEventListener('keyup', searchCoffee);







