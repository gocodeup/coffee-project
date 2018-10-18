"use strict";

var divbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');
var submitNewCoffee = document.querySelector('#new-coffee-submit');


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
    {id: 14, name: 'French', roast: 'dark'}
];


function renderCoffee(coffee) {
    var html = '<div class="coffee my-3 col-6 d-inline-block">';
    html += '<h3 class="d-inline mr-2">' + coffee.name + '</h3>';
    html += '<p class="d-inline text-white">' + coffee.roast + '</p>';
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
    var selectedRoast = roastSelection.value;
    var selectedNames = nameSelection.value.toLowerCase();
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (((coffee.roast === selectedRoast) || selectedRoast === "all") && (coffee.name.toLowerCase().includes(selectedNames))) {
            filteredCoffees.push(coffee);
        }
    });
    divbody.innerHTML = renderCoffees(filteredCoffees);
}


function addCoffee(e) {
    e.preventDefault();
    var newName = document.querySelector('#new-name-selection');
    var newRoast = document.querySelector('#new-roast-selection');
    var newCoffee =
        {
            id: (coffees.length + 1),
            name: newName.value,
            roast: newRoast.value
        };

    coffees.push(newCoffee);
    updateCoffees(e);
}


divbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
nameSelection.addEventListener('keyup', updateCoffees);
submitNewCoffee.addEventListener('click', addCoffee);
