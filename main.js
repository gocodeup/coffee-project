"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h5>' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || coffee.all === selectedRoast) && coffee.name.toLowerCase().includes(searchBox.value)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(name, roast, arr) {
    var all = "all"
    var newCoffee = {
        id: coffees.length + 1,
        name: name,
        roast: roast,
        all: all
    };
    arr.push(newCoffee);
    return arr;
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', all: "all"},
    {id: 2, name: 'Half City', roast: 'light', all: "all"},
    {id: 3, name: 'Cinnamon', roast: 'light', all: "all"},
    {id: 4, name: 'City', roast: 'medium', all: "all"},
    {id: 5, name: 'American', roast: 'medium', all: "all"},
    {id: 6, name: 'Breakfast', roast: 'medium', all: "all"},
    {id: 7, name: 'High', roast: 'dark', all: "all"},
    {id: 8, name: 'Continental', roast: 'dark', all: "all"},
    {id: 9, name: 'New Orleans', roast: 'dark', all: "all"},
    {id: 10, name: 'European', roast: 'dark', all: "all"},
    {id: 11, name: 'Espresso', roast: 'dark', all: "all"},
    {id: 12, name: 'Viennese', roast: 'dark', all: "all"},
    {id: 13, name: 'Italian', roast: 'dark', all: "all"},
    {id: 14, name: 'French', roast: 'dark', all: "all"},
];

var searchBox = document.querySelector("#cname");
var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var newRoastSelection = document.querySelector('#coffee-input')
var coffeeTextInput = document.querySelector("#cinputname");
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);

// document.querySelector("#coffee-button").addEventListener('click', addCoffee(coffeeTextInput.value, newRoastSelection.value,coffees));
document.querySelector("#coffee-button").addEventListener('click', function (e) {
    e.preventDefault();
    var all = "all"
    var newCoffee = {
        id: coffees.length + 1,
        name: coffeeTextInput.value,
        roast: newRoastSelection.value,
        all: all
    };
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
});