"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffeesByRoast(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffeeRoasts = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffeeRoasts.push(coffee);
            bodyMainDiv.innerHTML = renderCoffees(filteredCoffeeRoasts);
        } else if ('All Roasts' === selectedRoast) {
            bodyMainDiv.innerHTML = renderCoffees(coffees);
        }
    });
}

function updateCoffeesByName() {
    var selectedCoffee = coffeeSearch.value;
    var filteredCoffeeNames = [];
    coffees.forEach(function(coffee) {
        if (coffee.name === selectedCoffee || coffee.name.startsWith(selectedCoffee) || coffeeSearch.value.toLowerCase() === coffee.name.toLowerCase() || coffee.name.toLowerCase().startsWith(selectedCoffee.toLowerCase()) || coffee.name.includes(selectedCoffee) || coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffeeNames.push(coffee);
        }
    });
    bodyMainDiv.innerHTML = renderCoffees(filteredCoffeeNames);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

coffees.sort((a, b) => {
    return (b.id - a.id);
});

var bodyMainDiv = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-selection');

bodyMainDiv.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffeesByRoast);
// submitButton.addEventListener('click', updateCoffeesByRoast);
coffeeSearch.addEventListener('keyup', updateCoffeesByName);

// Comment