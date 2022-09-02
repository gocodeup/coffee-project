"use strict"
// Produces main body of table with data such as html ID, type of coffee roast, and name of coffee
// $$$Completed removed the id from showing on table
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td class="roast-type">' + coffee.roast + '</td>';
    html += '</tr>';
    return html;
}

function renderCoffees(coffees) {
    // creates empty variable for html
    var html = '';
    // loops through list of coffee to get info shown is function above
    for(var i = coffees.length - 1; i >= 0; i--) {
        // html += renderCoffee(coffees[i]);
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function renderSortedCoffees(coffees) {
    // creates empty variable for html
    var html = '';
    // loops through list of coffee to get info shown is function above
    for(var i = 0; i < coffees.length; ++i) {
        // html += renderCoffee(coffees[i]);
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

//1. Sort coffees by id's in acending order
// - sort an array of dictionaries
// - use a for to iterate through array
// - during the iteration I need to look through the dictionary for the coffee id values
// - while I'm there I need to create a conditional to sort the ids
//      - [conditional] IF id's is equal(===) to the iteration (i) I'm on.
//          - I need to remove element than move to front to the front of array using push/shift/splice
// - console log to check to see if sorted by ids
var coffeesSorted = coffees;
for(let i = 0; i < coffeesSorted.length; ++i){
    if(coffeesSorted[i]["id"] === coffeesSorted[i]){
        coffeesSorted.splice(coffeesSorted[i], 1, coffeesSorted[i]["value"])
    }
}
// Solutions to TODO 1 was to refactor existing code of renderCoffee
// coffees was already sorted in ascending order
// coffeesSorted was pointless, however could be used as a copy of coffees
function renderSorted(coffees) {
    var html = '';
    for(let i = 0; i < coffees.length; ++i){
        html += renderCoffee(coffees[i]);
    }
    return;
}
// TODO Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
// 1. search coffee by name
// - create a for loop for coffee, iterate through each coffee and compare to document.getElementByID("serach-bar").value

function typeCoffee(e) {
    var typed_coffee = document.getElementById("search-bar").value;
    typed_coffee = typed_coffee.toLowerCase()
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = typed_coffee;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase() === selectedName) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function typingCoffee(e) {
    var typed_coffee = document.getElementById("search-bar").value;
    typed_coffee = typed_coffee.toLowerCase();
    e.preventDefault(); // don't submit the form, we just want to update the data
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var bucket = coffee.name.toLowerCase()
        if(bucket[0] === typed_coffee[0]) {
            if (bucket[1] === typed_coffee[1]) {
                filteredCoffees.push(coffee);
            }else if(bucket[1] === typed_coffee[1]){
                location.reload()
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#search-bar');

// tbody.innerHTML = renderCoffees(coffees);
tbody.innerHTML = renderSortedCoffees(coffeesSorted);



submitButton.addEventListener("click", updateCoffees);
searchBar.addEventListener("click", typeCoffee);
searchBar.addEventListener("keyup", typingCoffee);


//addition to test push


