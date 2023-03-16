"use strict"

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

function renderCoffee(coffee) {
    let html = '<div class="row coffee-type">';
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
// FIRST DROPDOWN MENU FUNCTION
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    selectedRoast = selectedRoast.value;
    nameSelected = nameSelected.value;
    let filteredCoffees = [];
    if (nameSelected === ''); {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
            if (selectedRoast === 'all') {
                filteredCoffees.push(coffee);
            }
        });
        coffeeList.innerHTML = renderCoffees(filteredCoffees);
    }
}

// SECOND DROPDOWN MENU FUNCTION
function updateCoffeesTwo(e) {
    e.preventDefault();
    selectedRoastTwo = selectedRoastTwo.value;
    // nameSelected = nameSelected.value;
    let filteredCoffees = [];
    if (nameSelected === ''); {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoastTwo) {
                filteredCoffees.push(coffee);
            }
            if (selectedRoastTwo === 'all') {
                filteredCoffees.push(coffee);
            }
        });
        coffeeList.innerHTML = renderCoffees(filteredCoffees);
    }
}

// FIRST SEARCH BAR FUNCTION
function searchCoffees() {
    let searchRoast = nameSelected.value.toUpperCase();
    let filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// SECOND SEARCH BAR FUNCTION
function searchCoffeesTwo() {
    let searchRoastTwo = secondNameSelected.value.toUpperCase();
    let filteredCoffees = [];
    console.log(searchRoastTwo);
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoastTwo)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}


// let topSubmitBtn = document.querySelector('#top-submit-btn');
let coffeeList = document.querySelector('#coffee-list');
let nameSelected = document.querySelector('#coffee-name');
let secondNameSelected = document.querySelector('#custom-coffee-name');
let selectedRoast = document.querySelector('#roast1');
let selectedRoastTwo = document.querySelector('#roast2');

// EVENT LISTENERS
coffeeList.innerHTML = renderCoffees(coffees);
selectedRoast.addEventListener('change', updateCoffees);
selectedRoastTwo.addEventListener('change', updateCoffeesTwo);
nameSelected.addEventListener('keyup', searchCoffees);
secondNameSelected.addEventListener('keyup', searchCoffeesTwo);