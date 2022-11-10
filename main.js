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

let displayedCoffee = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeSearchBar = document.querySelector('#coffee-search');


// coffee to be displayed
let filteredCoffee = [];
//--------------------------------------

// this function renders the html into what is being displayed
function renderCoffeeDiv(coffee) {
    let html = '<div class="coffee">';
    html += '<div class="coffee-id" style="visibility: hidden">' + coffee.id + '</div>';
    html += '<div class="coffee-name">' + coffee.name + '</div>';
    html += '<div class="coffee-roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}
//--------------------------------------

// this function pushes the coffee array of objects into the function above
function renderAllCoffeesList(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffeeDiv(coffees[i]);
    }
    return html;
};
//--------------------------------------
function clearFilter () {
    if (filteredCoffee.length > 1) {
        filteredCoffee = []
    }
}

//todo make sure it checks for all letters

// updating what is being displayed based on the roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'all') {
            filteredCoffee.push(coffee);
            return displayedCoffee.innerHTML = renderAllCoffeesList(filteredCoffee);
        }
    });
};
//--------------------------------------

// this function is checking what is being searched
function checkCoffeeName () {
    let search = coffeeSearchBar.value;
    let searchedCoffee = [];
    for(let i = 0; i < filteredCoffee.length; i++) {
        if ((filteredCoffee[i].name.toLowerCase()).includes(search) || (filteredCoffee[i].name.toUpperCase()).includes(search)) {
            searchedCoffee.push(filteredCoffee[i])
        }
    }
    return displayedCoffee.innerHTML = renderAllCoffeesList(searchedCoffee);
}
//--------------------------------------



displayedCoffee.innerHTML = renderAllCoffeesList(coffees);

submitButton.addEventListener('click', updateCoffees);
// submitButton.addEventListener('click', clearFilter);

coffeeSearchBar.addEventListener("keyup", (e) => checkCoffeeName());

