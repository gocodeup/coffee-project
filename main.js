"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee card">';
    html += '<div class="id d-none">' + coffee.id + '</div>';
    html += '<h5 class="card-header">' + coffee.name + '</h5>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
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
    var selectedCoffee = coffeeSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().indexOf(selectedCoffee)!== -1) {
            filteredCoffees.push(coffee);
        } if (roastSelection.value === '') {
            filteredCoffees.push(coffee.roast);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(x) {
    x.preventDefault();
    var creatCoffee = {
        id: coffees.length + 1,
        name: newCoffee.value,
        roast: anotherRoast.value,
    }
    return coffees.push(creatCoffee);
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
var anotherRoast = document.querySelector('#another-roast');
var newCoffee = document.querySelector('#whatever');
var submitTwo = document.querySelector('#submitAlso');
var coffeeSelection = document.querySelector('#coffee-selection')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitTwo.addEventListener('click', addCoffee);
coffeeSelection.addEventListener('input', updateCoffees)
roastSelection.addEventListener('input', updateCoffees)
