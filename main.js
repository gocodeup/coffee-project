"use strict";

// HTML function

function renderCoffee(coffee) {
    var html = '';
    // html += '<p>' + coffee.id + '</p>';
    html += '<span class="card-style">';
    html += '<a class="coffeeName">' + coffee.name + '</a>';
    html += '<a class="coffeeRoast">' + coffee.roast + '</a>';
    html += '</span>';

    return html;
}
//
//
function play() {
    var slam = new Audio('audio/slam.mp3');
    slam.play();
}
//
//
// Coffee ID sort list

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Coffee roaster selection

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

// Coffee Array
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Tubular', roast: 'LIGHT'},
    {id: 2, name: 'Bodacious', roast: 'LIGHT'},
    {id: 3, name: 'Covfefe', roast: 'LIGHT'},
    {id: 4, name: 'Mid Grade', roast: 'MEDIUM'},
    {id: 5, name: 'SoSoSO..', roast: 'MEDIUM'},
    {id: 6, name: 'Breakfast', roast: 'MEDIUM'},
    {id: 7, name: 'Hx.JiqqZ', roast: 'DARK'},
    {id: 8, name: 'Gnarly', roast: 'DARK'},
    {id: 9, name: 'X-treme', roast: 'DARK'},
    {id: 10, name: 'Radical', roast: 'DARK'},
    {id: 11, name: 'Capt. Oily', roast: 'DARK'},
    {id: 12, name: 'Aggro', roast: 'DARK'},
    {id: 13, name: 'Kill It w/ Fire', roast: 'DARK'},
    {id: 14, name: 'RDNKLS', roast: 'DARK'},
];
// coffees search
function myFunction() {
    var bucket = [];
    var input = document.getElementById("myInput").value.toLowerCase();
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(input)) {
            bucket.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(bucket);
}

// coffee list
var tbody = document.querySelector('#coffees');

// var submitButton = document.querySelector('#submit');

var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('click', updateCoffees);

// Search event Listener
var textInput = document.querySelector('#myInput');

textInput.addEventListener("keyup", myFunction);
