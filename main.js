"use strict";

function renderCoffee(coffee) {
    var html = '<div id="coffee-list" class="coffee mb-5" style="width: 260px; height: 60px;">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<div>.........................................................</div></div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

var txtValue;
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    search();
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all'){
            if (coffee.name.toLowerCase().indexOf(txtValue.toLowerCase()) > -1) {
                filteredCoffees.push(coffee);
            }
        }
        if (coffee.roast === selectedRoast) {
            if (coffee.name.toLowerCase().indexOf(txtValue.toLowerCase()) > -1) {
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function search () {
    txtValue = searchText.value;
}

function addCoffee (e) {
    e.preventDefault();
    console.log(coffeeAddition);
    coffees.push({name: coffeeAddition.value , roast: roastAddition.value});
    updateCoffees(e);
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchText = document.querySelector('#search-text');
var roastAddition = document.querySelector('#add-roast-selection');
var coffeeAddition = document.querySelector('#new-coffee');
var addCoffeeSubmit = document.querySelector('#add-submit');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
searchText.addEventListener('keyup', updateCoffees);
addCoffeeSubmit.addEventListener('click', addCoffee);

