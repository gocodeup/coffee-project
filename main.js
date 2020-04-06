"use strict";


function renderCoffee(coffee) {
    var html = '<div>';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h1 id="coffeeNameHead">' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// RENDERING COFFEES IN ASCENDING ORDER BY ID original code ^^

function renderCoffees(coffees) {
    var html = "" ;

    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// TRYING TO UNDERSTAND FUNCTIONALITY ^^

 function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var nameInput = coffeeName.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(nameInput)) {
            filteredCoffees.push(coffee);

        }

    });
    coffeeInfo.innerHTML = renderCoffees(filteredCoffees);
}

var a = document.getElementById('coffee-name');
a.addEventListener('keyup', updateCoffees);

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

var coffeeInfo = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector('#coffee-name');

coffeeInfo.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
