"use strict";

// Populates HTML Div element with coffee array
function renderCoffee(coffee) {
    var html = '<li class="my-3"><div class= "col coffee-card px-0 mx-5 mb-0 mt-0"><h3>' + coffee.name + '</h3>';
    html += '<p class="pl-1">' + coffee.roast + '</p></div></li>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Simple string comparison function
function stringComp(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    console.log(str1);
    console.log(str2);

    if (str1.indexOf(str2) !== -1) {
        return true;
    } else {
        return false;
    }
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searched = coffeeSearch.value;

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'all') {
            if (stringComp(coffee.name, searched)) {
                filteredCoffees.push(coffee);
                console.log('comparison passed.');
            } else if (searched === '') {
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
        // CARSON ADD
// Adds new coffee to coffees[] array, then
// displays new list of coffees
function addCoffee(e) {
    e.preventDefault();
    var newCoffee = {
        id: coffees.length + 1,
        name: nameAdd.value,
        roast: roastAdd.value
    };

    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}
        // CARSON ADD



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

// Coffee search/update
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');

// Gets HTML elements related to adding new coffee
var roastAdd = document.querySelector('#roast-add');
var nameAdd = document.querySelector('#name-add');
var userSubmit = document.querySelector('#user-submit');

tbody.innerHTML = renderCoffees(coffees);

// Listeners
console.log(submitButton.addEventListener('click', updateCoffees));
roastSelection.addEventListener('change', updateCoffees);
userSubmit.addEventListener('click', addCoffee);
coffeeSearch.addEventListener('input', updateCoffees);