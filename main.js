"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || coffee.group === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', group: 'all'},
    {id: 2, name: 'Half City', roast: 'light', group: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', group: 'all'},
    {id: 4, name: 'City', roast: 'medium', group: 'all'},
    {id: 5, name: 'American', roast: 'medium', group: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', group: 'all'},
    {id: 7, name: 'High', roast: 'dark', group: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', group: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', group: 'all'},
    {id: 10, name: 'European', roast: 'dark', group: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', group: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', group: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', group: 'all'},
    {id: 14, name: 'French', roast: 'dark', group: 'all'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
