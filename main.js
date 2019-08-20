"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee-child">' + '<h1 class="coffee">' + coffee.name + '</h1>';

    html += '<p>'+ "" + coffee.roast + '</p>' + '</div>';


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
    var searchCoffee = document.getElementById('addCoffeeName').value;
    var filteredCoffees = [];


    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())){
            filteredCoffees.push(coffee);
        }
        else if ( coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });


    console.log(searchCoffee);
    var selector = document.getElementById("coffees");
    selector.innerHTML = renderCoffees(filteredCoffees);
    console.log(selectedRoast)
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

var addCoffee = document.querySelector("#addCoffeeName");
var coffeeSelector = document.querySelector("#roast-selection");
var selector = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

selector.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

coffeeSelector.addEventListener("change", updateCoffees);

addCoffee.addEventListener("keyup", updateCoffees);
