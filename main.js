"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// filter function

// End of the filter function


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


    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast == "all") {
            filteredCoffees.push(coffee);
        }
    });


    var morefilteredCoffee = [];

    coffees.forEach(function(coffee) {

        var stringCoffee = coffeeSearch.value;
        if(coffee.name.toLowerCase() == stringCoffee.toLowerCase()) {
            morefilteredCoffee.push(coffee);
            console.log(morefilteredCoffee);
            console.log(coffee.name.toLowerCase() + " was found");
        }

it
    });

    if (morefilteredCoffee.length >= 1)   {
        tbody.innerHTML = renderCoffees(morefilteredCoffee);
    } else {
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

}

//add a new coffee
function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var newCoffee = generateCoffee()
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

//generates coffee object to add to table. ID based on list length.
function generateCoffee() {
    //user input name
    var name = userCoffeeInput.value
    var id = coffees.length + 1
    var roast = addRoastSelection.value

    return {id: id, name:name, roast:roast}
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

// An array for the coffee filter list

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
tbody.innerHTML = renderCoffees(coffees);

//search
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);
var roastSelection = document.querySelector('#roast-selection');
var moreFilteredCoffee = "";
var coffeeSearch =document.querySelector("#filter");
coffeeSearch.addEventListener('input', function(e) {

})
// coffeeSearch.addEventListener('keyup', function () {
//     moreFilteredCoffee = coffeeSearch.value;
//     console.log(moreFilteredCoffee)
// });

// var searchBar = document.forms['filter'].querySelector("input");
//     searchBar.addEventListener('keyup', function (e) {
//         var term = e.target.value.toLowerCase();
//         coffees.forEach(function(coffee) {
//             var coffeeName = coffee.name
//         })
// });


//add
var userCoffeeInput = document.querySelector('#user-coffee-input');
var addRoastSelection = document.querySelector('#add-roast-selection');
var addButton = document.querySelector('#addCoffee');
addButton.addEventListener('click', addCoffee);
