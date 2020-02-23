"use strict";

// HTML function

function renderCoffee(coffee) {
    var html = '';
    // html += '<p>' + coffee.id + '</p>';
    html += '<span>';
    html += '<h4 class="coffeeName">' + coffee.name + '</h4>';
    html += '<p class="coffeeRoast">' + coffee.roast + '</p>';
    html += '</span>';

    return html;
}

// Coffee ID sort list

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Coffee roaster selection

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Coffee Array
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'LIGHT'},
    {id: 2, name: 'Half City', roast: 'LIGHT'},
    {id: 3, name: 'Cinnamon', roast: 'LIGHT'},
    {id: 4, name: 'City', roast: 'MEDIUM'},
    {id: 5, name: 'American', roast: 'MEDIUM'},
    {id: 6, name: 'Breakfast', roast: 'MEDIUM'},
    {id: 7, name: 'High', roast: 'DARK'},
    {id: 8, name: 'Continental', roast: 'DARK'},
    {id: 9, name: 'New Orleans', roast: 'DARK'},
    {id: 10, name: 'European', roast: 'DARK'},
    {id: 11, name: 'Espresso', roast: 'DARK'},
    {id: 12, name: 'Viennese', roast: 'DARK'},
    {id: 13, name: 'Italian', roast: 'DARK'},
    {id: 14, name: 'French', roast: 'DARK'},
];

function myFunction() {
    var bucket = [];
    var input = document.getElementById("myInput").value.toLowerCase();
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(input)) {
            bucket.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(bucket);
}

// coffee list
var tbody = document.querySelector('#coffees');

// var submitButton = document.querySelector('#submit');

var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('click', updateCoffees);

var textInput = document.querySelector('#myInput');

textInput.addEventListener("keyup", myFunction);
