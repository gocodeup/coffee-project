"use strict"

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>' + '<br>';
    // html += '</tr>';
    var html = '<div class="coffee">';
    html += '<div class="coffee-menu">' + coffee.name + '</div>';
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
    var filteredCoffees = [];
    // coffees.forEach(function(coffee) {
    //     if (coffee.roast === selectedRoast) {
    //         filteredCoffees.push(coffee);
    //     }
    // });
    // tbody.innerHTML = renderCoffees(filteredCoffees);
    if (selectedRoast === "all") {
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

}

function findCoffee(input){
    input.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = searchCoffee.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedCoffee) >= 0) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// ==== Adds a new coffee and roast object =====

function newCoffee(input) {
    input.preventDefault();
    var newArr = [];
    var coffeeObj = {
        name: addCoffee.value,
        roast: roastSelectionTwo.value
    };
    coffees.push(coffeeObj);
    tbody.innerHTML = renderCoffees(coffees);
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

var searchCoffee = document.querySelector('#coffee-name');

var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
submitButton.addEventListener('click', updateCoffees);
searchCoffee.addEventListener('keyup', findCoffee);

// This section is for adding a new coffee
var addCoffee = document.querySelector('#add-name');
var secondSubmitButton = document.getElementById('second-submit');
var roastSelectionTwo = document.querySelector('#add-roast-selection');
secondSubmitButton.addEventListener('click', newCoffee);
console.log(coffees);
// console.log(roastSelection.value);

// console.log(newCoffee('San Antonio', 'Medium', coffees));
// console.log(searchCoffee.value)