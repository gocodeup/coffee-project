"use strict";

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length;  i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

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


var search = function updateCoffeesTwo(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = nameSelection.value;
    var filteredCoffeesTwo = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase() === selectedName.toLowerCase()) {
            filteredCoffeesTwo.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffeesTwo);
};

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
    {id: 12, name: 'Death Roast', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('.form-control');
tbody.innerHTML = renderCoffees(coffees);
var submitTwoButton = document.querySelector('#submitTwo');
submitTwoButton.addEventListener('click', search);
submitButton.addEventListener('click', updateCoffees);

var result = "";

document.getElementById('searchbar').addEventListener('keydown', function(event) {
    var drinks = [];
    var key = event.key.toLowerCase();
    var charList = 'abcdefghijklmnopqrstuvwxyz';
    if (charList.indexOf(key) === -1) return;
    result = result + key;
    console.log(result);
    coffees.forEach(function (coffee,i) {
        var compare = coffee.name.toLowerCase();
        if (compare.search(result) >= 0) {
            drinks.push(coffee)

        }
    });
    console.log(drinks);
    for(var i = 0; i < drinks.length; i++)
    document.getElementById('result').innerHTML += drinks[i].name + "<br><br>" + drinks[i].roast + "<br><br>";
    });




// nameSelection.addEventListener('click', updateCoffeesTwo);