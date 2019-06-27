"use strict";

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
var submitButton = document.querySelector('#submit1');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector("#coffee");
var addButton = document.querySelector('#submit2');
var addRoast = document.querySelector('#add-roast');
var addName = document.querySelector('#myCoffee');

//used to display coffee
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '' + coffee.id + '';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//used to display new generated coffees based on searches
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1;  i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//update coffee results based on roast
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

// function showInput() {
//
//         console.log(coffeeSearch);
//         return coffeeSearch;
//     }

//updates coffees based on coffee name
function coffeeSearch(e) {
    e.preventDefault();
    var coffeeSearch = search.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee){
        if (coffee.name.toLowerCase().includes(coffeeSearch)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees)

}


tbody.innerHTML = renderCoffees(coffees);

//add a coffee
function addACoffee (e) {
    e.preventDefault();
    var newCoffee = addName.value;
    var newRoast = addRoast.value;
    var newId = Number(coffees.length + 1);
    ;
    var newCoffeeItem = ({id: newId, name: newCoffee, roast: newRoast});
    // console.log(newCoffeeList);
    coffees.push(newCoffeeItem);
    // console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
}

// console.log(coffees);




submitButton.addEventListener('click', updateCoffees);
search.addEventListener('keyup', coffeeSearch);
addButton.addEventListener('click', addACoffee);
