"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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

// add event selector to drop down so I can get the value and console.log it

function updateCoffees(roast) {
    event.preventDefault(); // don't submit the form, we just want to update the data

    var input = document.getElementById("search");
    var lowercaseInput = input.value.toLowerCase();
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === roast) {
            filteredCoffees.push(coffee);
        }
    });
    // put the coffees on the page
    tbody.innerHTML = renderCoffees(filteredCoffees);


}
function searchCoffees () {
    event.preventDefault();
    var input = document.getElementById("search");
    var lowercaseInput = input.value.toLowerCase();
    console.log("hello");
    console.log(lowercaseInput);

    var filteredCoffees = []

    coffees.forEach(function (coffee) {
        var lowercaseCoffees = coffee.name.toLowerCase();
        // console.log(coffee.name);
        // console.log(lowercaseCoffees.indexOf(lowercaseInput));
        if (lowercaseCoffees.indexOf(lowercaseInput) !== -1 ) {
            filteredCoffees.push(coffee);

        }
    });
    console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// we need to get the user input
// we need to determine if the user input is in our coffees
// we can do this using .indexOf and forEach
// so, forEach (coffee).indexOf(coffee.name);

// indexOf: target.indexOf("Li") !== -1 => 0

var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener("change", function (e) {
    var roast = e.target.value;
    updateCoffees(roast);
});
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

// var lowercaseInput = input.toLowerCase();



var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');


tbody.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', searchCoffees);