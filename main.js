"use strict"

// creates divs for each object in coffees array
function renderCoffee(coffee) {
    var html = '<div class="coffee text-wrap p-1 col-6 d-flex inline-flex">';
    html += '<h5 class="mr-1" id="coffee-name">' + coffee.name + '</h5>';
    html += '<p class="ml-1" id="coffee-roast">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// orders divs by id
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// filters coffee by roast and/or text
function updateCoffees() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || coffee.all === selectedRoast) && coffee.name.toLowerCase().includes(searchBox.value)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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

var searchBox = document.querySelector("#cname"); // takes value of input on line 20 of html
var tbody = document.querySelector('#coffees'); // div that functions create html in
var roastSelection = document.querySelector('#roast-selection'); // takes value of select beginning at line 13 of html
var newRoastSelection = document.querySelector('#coffee-input') // takes value of select beginning at line 29 of html
var coffeeTextInput = document.querySelector("#cinputname"); // takes value of input on line 35 of html

tbody.innerHTML = renderCoffees(coffees); // invokes function above

// function that allows for new entries in the coffees array of objects
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