"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<div>';

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
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {

        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeComparison (x) {
    x.preventDefault(); // don't submit the form, we just want to update the data
    var searched = searchedCoffee.value.toLowerCase();
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (searched === coffees[i].name.toLowerCase()) {
            filteredCoffees.push(coffees[i]);
        }
    }
    div.innerHTML = renderCoffees(filteredCoffees);
}
//-------------------------
function searchCoffees(y) {
    y.preventDefault();
    var searchRoast = searchBox.value.toLowerCase();
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(searchRoast.toLowerCase())) {
            filteredCoffees.push(coffees[i]);
        }

        div.innerHTML = renderCoffees(filteredCoffees);
    }
}

//---------------------------



//ADD COFFEE
// var addForm = document.forms['add-coffee'];
// addForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     var value = addForm.querySelector('input[type="text"]').value;
//     var coffees = document.createElement('span');
//
//     coffees.push(coffees[i]);
//
//     div.innerHTML = renderCoffees(filteredCoffees);
// });

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

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchButton = document.querySelector('#searchbtn');
var searchedCoffee = document.querySelector('#query');
div.innerHTML = renderCoffees(coffees);
//---------------------
var searchBox = document.querySelector('.searchBox');
searchBox.addEventListener('keyup', searchCoffees);
//----------------------

searchButton.addEventListener('click', coffeeComparison);

submitButton.addEventListener('click', updateCoffees);
