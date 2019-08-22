"use strict";

function renderCoffee(coffee) {
    var html = '<div class="row">' + '<h1 class="coffee">' + coffee.name + '</h1>';

    html += '<p>' + coffee.roast + '</p>' + '</div>';


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
    var selectedRoast = coffeeSelector.value;
    var searchCoffee = document.getElementById('searchCoffeeName').value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())){
            filteredCoffees.push(coffee);
        }
        else if ( coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    var selector = document.getElementById("coffees");
    selector.innerHTML = renderCoffees(filteredCoffees);
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

function createCoffee( name, roast) {
    coffees.unshift( {id: coffees.length + 1, name: name, roast: roast });
}


function takeCoffeeInput(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var roastType =  addRoastType.value;
    var newCoffeeName = document.getElementById('newCoffeeName').value;

    createCoffee(newCoffeeName, roastType);

    var newCoffee = document.getElementById("coffees");
    newCoffee.innerHTML = renderCoffees(coffees);
    console.log(newCoffeeName);
}

var searchCoffee = document.querySelector("#searchCoffeeName");
var coffeeSelector = document.querySelector("#roast-selection");
var selector = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var addRoastType = document.querySelector('#roast-creator');


selector.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

submitButton2.addEventListener('click', takeCoffeeInput);

coffeeSelector.addEventListener("change", updateCoffees);

searchCoffee.addEventListener("keyup", updateCoffees);

