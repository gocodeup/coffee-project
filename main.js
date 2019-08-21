"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
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



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var coffeNameInput = coffeeName.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().indexOf(coffeNameInput) !== -1) {
            filteredCoffees.push(coffee);
        }else if(selectedRoast === "All" && coffee.name.toLowerCase().indexOf(coffeNameInput) !== -1) {
            filteredCoffees.push(coffee);
        }


    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {

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
// placeholder for ascending order
coffees.reverse();

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitNewCoffeeButton = document.querySelector('#add-submit');
var roastSelection = document.querySelector('#roast-selection');
var roastAddSelection = document.querySelector('#addRoast-selection');
var coffeeName =  document.querySelector('#coffee-name');
var coffeeAddName =  document.querySelector('#add-coffeeName');

tbody.innerHTML = renderCoffees(coffees);

submitNewCoffeeButton.addEventListener('click', addCoffee);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);

coffeeName.addEventListener('keyup', updateCoffees);


