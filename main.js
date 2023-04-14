"use strict";

// COFFEE - TABLE CONTENT //

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

var inputName = document.querySelector('#input-name');
var inputRoast = document.querySelector('#input-roast');
var CoffeeButton = document.querySelector('#input-submit');
CoffeeButton.addEventListener('click', addCoffees);

function addCoffees (input) {
    var addID = coffees.length+1;
    var addName = inputName.value.toString();
    var addRoast = inputRoast.value.toString();
    input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    console.log(coffees);
    coffeeList.innerHTML = renderCoffees(coffees);

}

// PUTS COFFEE DATA INTO TABLE WITHIN JS //
function renderCoffee(coffee) {

    var html = '<div class="product-container">';
    // html += '<span>' + coffee.id + '</span>';
    html += '<h1 class="product-name">' + coffee.name + '</h1>';
    html += '<p class="product-roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// CONVERTS ABOVE TABLE DATA INTO STRINGS //
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// "EXPORTS" DATA INTO TABLE OF HTML //
var coffeeList = document.querySelector('#coffees');
coffeeList.innerHTML = renderCoffees(coffees);

// SUBMIT SECTION //
var roastSelection = document.querySelector('#roast-selection');

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(roastSelection.value === 'all'){
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}
// LIVE SEARCH FUNCTION //
function searchCoffees() {
    var searchRoast = searchBox.value.toUpperCase();
    var filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}


var searchBox = document.querySelector('#searchBox');
searchBox.addEventListener('keyup', searchCoffees);

var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);