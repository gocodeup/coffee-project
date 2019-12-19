"use strict";

function renderCoffee(coffee) {//sets up table//
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html
}

function renderCoffees(filteredList) {
    var html = '';
    for (var i = filteredList.length - 1; i >= 0; i--) {
        html += renderCoffee(filteredList[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    // tbody.innerHTML = renderCoffees(filteredCoffees);
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchInput = userInput.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        var currentRoast = coffee.roast.toLowerCase();
        var currentName = coffee.name.toLowerCase();
        if (currentRoast.includes(searchInput) || currentName.includes(searchInput)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var coffeeList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var userInput = document.querySelector('#search-bar');
var searchSubmit = document.querySelector('#search-btn');


coffeeList.innerHTML = renderCoffees(coffees.sort(function(a, b){return a.id-b.id}));

submitButton.addEventListener('click', updateCoffees);
searchSubmit.addEventListener("click", searchCoffees);
userInput.addEventListener("keyup", searchCoffees);