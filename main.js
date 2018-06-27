"use strict";

function displayCoffees(arr) {
    var coffeesContainer ='<div id="coffee-labels-container">';
    arr.forEach(function (el) {
        coffeesContainer += '<h2 class="coffee-name">' + el.name + '</h2>';
        coffeesContainer += '<p>' + el.roast + '</p>';
    });
    coffeesContainer += '</div>';
    document.getElementById('coffees').innerHTML = coffeesContainer;
}









document.getElementById('myInput').addEventListener('keyup', function() {
    var newCoffees = [];
    coffees.forEach(function (el) {
        if(el.name.toLowerCase().match(document.getElementById('myInput').value)) {
            newCoffees.push(el);
        }
    });
    displayCoffees(newCoffees);
});










function renderCoffee(coffee) {
    var html = '<div class="coffee">';
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
//
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var input_value = document.getElementById('myInput').value;
    document.getElementById('submit').innerHTML = input_value;
    var roast_value = document.getElementById('roast-selection').value;
    document.getElementsById('roastchoice').innerHTML = roast_value;

    var firstCoffee = {
        name: 'input_value',
        roast: 'roast_value'
    };

    var newCoffeeArray = [];
    newCoffeeArray.push(firstCoffee);


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

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);

// var submitButton2 = document.querySelector('#submit2');
// var roastSelection2 = document.querySelector('#roastSelection2');
//
//
// roastSelection2.addEventListener('change', updateCoffees);