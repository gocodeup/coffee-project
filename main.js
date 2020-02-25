"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div';
    html += '<h3>' + coffee.name + '</h3>' + " " + '<p>' + coffee.roast + '</p>';
    // html += '<div>' + 'Roast Type:' + '<p>' + coffee.roast + '</p></div>';
    html += '</div>';
    return html;
}

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//this function was added to work with user input when searching for coffee by typing into search field.  captures input with "coffee-input" id.
function chooseCoffee(e) {
    e.preventDefault();
    // console.log(e);  this will show each key input in the console.  not needed for actual functionality
    var html = "";
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(document.getElementById("coffee-input").value.toLowerCase())) {
            console.log(coffees.name);
            html = html + renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
}

//this function added to add/create new coffee added by user
function newCoffee() {
    var newCoffeeObject = {};
    newCoffeeObject.name = newCoffeeName.value;
    newCoffeeObject.roast = newCoffeeRoast.value;
    newCoffeeObject.id = coffees.length + 1;
    coffees.push(newCoffeeObject);
    localStorage.setItem('locallyStoredCoffee', JSON.stringify(coffees));
    body.innerHTML = renderCoffees(coffees);
    return selectionOrder.innerHTML = renderCoffee(coffees);
}

var newCoffeeName = document.querySelector('#new-coffee'); //var added to be used in function newCoffee
var newCoffeeRoast = document.querySelector('#new-roast'); //var added to be used in function newCoffee

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees; //declaring coffees var to be used in if statement below which is used to determine if new coffee is being added.

if (localStorage.getItem('locallyStoredCoffee') === null) {
    coffees = [
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
//else statement below added to add new coffee to local storage
} else {
    coffees = JSON.parse(localStorage.getItem('locallyStoredCoffee'))
}
localStorage.setItem('locallyStoredCoffee', JSON.stringify(coffees));

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

//this auto selects the coffees that show up on page as user types letter at a time
document.getElementById("coffee-input").addEventListener("keyup", chooseCoffee);
//this works with getting the info for adding new coffee
document.getElementById("submitNewCoffee").addEventListener("click", newCoffee);

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


