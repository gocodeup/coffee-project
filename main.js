"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee col-3 rounded-circle text-center">';
    html += '<span class="m-2">';
    html += '<h1 class="p-2">' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</span>';
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

function updateCoffees() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            filteredCoffees = coffees;
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

}



function coffeeSearch() {
    var selectedRoast = roastSelection.value;
    var selectedSearch = nameSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedSearch) > -1 && selectedRoast === "all") {
            filteredCoffees.push(coffee);
        } else if (coffee.name.toLowerCase().indexOf(selectedSearch) > -1 && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedSearch === " ") {
            filteredCoffees = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

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
    {id: 14, name: 'French', roast: 'dark'}
];

var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector("#coffee-name-search input");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.onchange = updateCoffees;

nameSelection.oninput = coffeeSearch;

// submitButton.addEventListener('click', updateCoffees);
