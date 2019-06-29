"use strict";

var coffees = [
    {id: 1, name: 'Light City', roast: 'LIGHT ROAST'},
    {id: 2, name: 'Half City', roast: 'LIGHT ROAST'},
    {id: 3, name: 'Cinnamon', roast: 'LIGHT ROAST'},
    {id: 4, name: 'City', roast: 'MEDIUM ROAST'},
    {id: 5, name: 'American', roast: 'MEDIUM ROAST'},
    {id: 6, name: 'Breakfast', roast: 'MEDIUM ROAST'},
    {id: 7, name: 'High', roast: 'DARK ROAST'},
    {id: 8, name: 'Continental', roast: 'DARK ROAST'},
    {id: 9, name: 'New Orleans', roast: 'DARK ROAST'},
    {id: 10, name: 'European', roast: 'DARK ROAST'},
    {id: 11, name: 'Espresso', roast: 'DARK ROAST'},
    {id: 12, name: 'Viennese', roast: 'DARK ROAST'},
    {id: 13, name: 'Italian', roast: 'DARK ROAST'},
    {id: 14, name: 'French', roast: 'DARK ROAST'},
];

var filteredCoffees = coffees.slice(0);
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var searchInput = document.getElementById("input-coffee");

searchInput.addEventListener('keyup', searchCoffees);

//Initially calls function to render the coffees on page load (Initialize Coffees!)
tbody.innerHTML = renderMultiCoffees(coffees);

function renderMultiCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<p>' + coffee.roast + ' - ' + coffee.name + '</p>';
    html += '</div>';

    return html;
}

// Drop-down menu roast update:
function filterCoffees() {
    console.log("moose bunnies");
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toUpperCase();

    if (selectedRoast === 'ALL ROASTS') {
        filteredCoffees = coffees.slice(0);

        } else {

             filteredCoffees = [];
             coffees.forEach(function(coffee) {
                if (coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee);
                }
            });
        }
    tbody.innerHTML = renderMultiCoffees(filteredCoffees);
}

// LIVE, SEARCH FUNCTION! //

    function searchCoffees() {
        var searchString = document.getElementById('input-coffee').value.toUpperCase();
        var siftedCoffees = [];

        filteredCoffees.forEach(function (coffee) {
            if (coffee.name.toUpperCase().includes(searchString)) {
                siftedCoffees.push(coffee);
            }
        });

        tbody.innerHTML = renderMultiCoffees(siftedCoffees);
    }














