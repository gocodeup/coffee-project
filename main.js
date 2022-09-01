"use strict"

function renderCoffee(coffee) {
    var html = '<div class="container coffee-container">';
    html += '<span class="coffee-display">' + coffee.name + '</span>';
    html += '<span class="roast-display">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchedRoast = roastSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === searchedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(event) {
    event.preventDefault();
    var newCoffeeToBeAddedToArray = {id: coffees.length + 1, name: newCoffeeSelection.value, roast: roastSelection.value};
    coffees.push(newCoffeeToBeAddedToArray);
    div.innerHTML = renderCoffees(coffees);
    console.log(coffees);
}

function searchForCoffees(event) {
    var newArray = [];
    var typedLetters = searchField.value;
    typedLetters = typedLetters.toLowerCase();
    for (let i = 0; i < coffees.length; i++) {
        if (roastSearch.value === "all") {
            newArray = coffees;
        }
        else if (coffees[i].roast === roastSearch.value) {
            newArray.push(coffees[i]);
        }
    }
    div.innerHTML = renderCoffees(newArray);
}

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

var div = document.querySelector('#coffees');
var searchButton = document.querySelector('#search-button');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var roastSearch = document.querySelector('#roast-search');
var newCoffeeSelection = document.querySelector('#new-coffee-name')
var searchField = document.querySelector('#coffee-search');



div.innerHTML = renderCoffees(coffees);

searchButton.addEventListener('click', updateCoffees);
submitButton.addEventListener("click", addCoffee);
searchField.addEventListener('keypress', searchForCoffees);
roastSearch.addEventListener('change', searchForCoffees);


