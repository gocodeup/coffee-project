"use strict";

//taking array input from 'rendered coffees' and organizing it
    function renderCoffee(coffee) {
        var html = '<tr class="coffee">';
            // html += '<td>' + coffee.id + '</td>';
            html += '<td>' + coffee.name + '</td>';
            html += '<td>' + coffee.roast + '</td>';
        html += '</tr>';
        return html;
}
//taking data from coffee array and giving it to 'rendered coffee'
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//first form
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    // var searchInput = coffee.name.startsWith(userSearch.value);
    // var coffeeArrLowerCase = coffees.toLowerCase();
    var filteredCoffees = []; //create empty array to hold the for each return value
    coffees.forEach(function(coffee) {
        if (coffee.name.startsWith(userSearch.value)  && coffee.roast === selectedRoast) {
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

//create function that takes live user input and lives return coffee with same name and roast selection
//need to iterate through coffees array
//see if coffee array includes user input
//if includes return the matching output on html
//need to split coffee name to check letter by letter

// function coffeeNameSplit(){
//     coffees.forEach(function(coffee){
//       if(coffee.name.startsWith(userSearch) && updateCoffees()){
//
//       }
//     });
//
//     function updateUserSearch(f){
//
//     }
//
//
//     return coffeeNameArray;
// }

var tbody = document.querySelector('#coffees'); // creating tbody variable
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


var userSearch = document.querySelector('#user-search');

tbody.innerHTML = renderCoffees(coffees); //diplaying the output from the 'rendered coffee & rendered coffees' functions to html table

submitButton.addEventListener('click', updateCoffees); //updates user selection list using the top three functions...
userSearch.addEventListener('onchange', updateCoffees);