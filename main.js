"use strict";

function renderCoffee(coffee) {
    var html = "<div id=\"" + coffee.id + "\" " + "class =\"coffee\">";
    html += "<h3>" + coffee.name + "</h3>";
    html += "<p>" + coffee.roast + "</p>";
    html += "</div>";

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
    var searchCoffee = (document.getElementById("coffeeEntered").value).toLowerCase();
    var userSearch = new RegExp(searchCoffee, 'gi');
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast && coffee.name.match(userSearch)) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === "all" || coffee.name.match(userSearch)) {
            filteredCoffees.push(coffee);
        }
    });
    section.innerHTML = renderCoffees(filteredCoffees);
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

// QUERY SELECTORS
var section = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var enteredCoffee = document.querySelector('#coffeeEntered');
var wakeup = document.getElementsByClassName("coffee");


console.log(wakeup);

section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

enteredCoffee.addEventListener('input', updateCoffees);