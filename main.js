"use strict"


// This function displays the table
function renderCoffee(coffee) {
    console.log(coffee) //  {id: 14, name: american, roast: light}
    // <div class="content col-6"><h2>american</h2></div>
    var html = '<div class="content col-6">'; //controls the table
    html += '<h2>' + coffee.name + '<span>' + coffee.roast + '</span>' + '</h2>'; //shows the name
    html += '</div>';
//    console.log(html);
    return html;
}

// Affects the array list

function renderCoffees(coffees) {
    var html = ''; //affects the table contents
    for(var i = 0; i <= coffees.length - 1; i++) { // looping through coffees array from 14 -> 0
        console.log(coffees[i]);
        html += renderCoffee(coffees[i]); //affects the table contents
    }
    console.log('html in renderCoffeeS: ', html)
//     <div class="content col-6"><h2>american</h2></div> <div class="content col-6"><h2>espresso</h2></div>
    return html; //tells it what to print/show if not included result is undefined
}

// This function affects search option, only renders what is selected from drop down menu

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = []; //affects the dropdown selection menu
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeNames

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



// Searches and returns the first element of the coffee id, can manipulate to pull all 14 ids

var tbody = document.querySelector('#coffees');


var submitButton = document.querySelector('#submit');

// Drop down menu
var roastSelection = document.querySelector('#roast-selection');

// Changes innerHTML once you select the roast
tbody.innerHTML = renderCoffees(coffees); // <div class="content col-6"><h2>american</h2></div>
// This is for the Coffee Name iput bar (Will use this for "Name" for Add a Coffee Section
submitButton.addEventListener('click', updateCoffees);


// TO DO LIST

// Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)

// Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.


